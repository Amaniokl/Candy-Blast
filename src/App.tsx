import React, { useEffect } from "react";
import { createBoard } from "./utils/createBoard";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Board from "./components/Board";
import Tile from "./components/Tile";
import { updateBoard } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({candyCrush: {board}}) => board);
  const boardSize = useAppSelector(
    ({candyCrush: {boardSize}}) => boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  return <div className="flex items-center justify-center h-screen">
    <Board/>
  </div>
}

export default App;
