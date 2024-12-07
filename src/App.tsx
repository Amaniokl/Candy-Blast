import React, { useEffect } from "react";
import { createBoard } from "./utils/createBoard";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Board from "./components/Board";
import Tile from "./components/Tile";
import { updateBoard } from "./store";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";
// import isRowOfFour
function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  // useEffect(()=>{
  //   dispatch(updateBoard(createBoard(boardSize)));
  // }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(
        newBoard, 
        boardSize, 
        formulaForColumnOfFour(boardSize)
      );
      checkForRowOfFour(newBoard, 
        boardSize, 
        generateInvalidMoves(boardSize, true)
      );
      isColumnOfThree(newBoard, 
        boardSize, 
        formulaForColumnOfThree(boardSize)
      );
      checkForRowOfThree(newBoard, 
        boardSize, 
        generateInvalidMoves(boardSize)
      );
      dispatch(updateBoard(newBoard));

    }, 150);
    return () => clearInterval(timeout)
  }, [board, boardSize, dispatch]);

  return <div className="flex items-center justify-center h-screen">
    <Board />
  </div>
}

export default App;
