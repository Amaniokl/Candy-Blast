// import { formulaForColumnOfFour } from "./formulas";

export const isColumnOfFour = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfFour: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
        const columnOfFour: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3,
        ];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";

        if (
            columnOfFour.every(
                (square: number) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            columnOfFour.forEach((square: number) => (newBoard[square] = ""));
            return true;
        }
    }
};

export const isColumnOfThree = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
        const columnOfThree: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2
        ];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";

        
    }
};

export const checkForRowOfFour=(
    newBoard:string[],
    boardSize:number,
    invalidMoves:number[]
)=>{
    for(let i:number=0; i<boardSize*boardSize; i++){
        const rowOfFour=[i, i+1, i+2, i+3]
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";
        if(invalidMoves.includes(i))continue;

        if (
            rowOfFour.every(
                (square: number) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            rowOfFour.forEach((square: number) => (newBoard[square] = ""));
            return true;
        }
    }
}

export const checkForRowOfThree=(
    newBoard:string[],
    boardSize:number,
    invalidMoves:number[]
)=>{
    for(let i:number=0; i<boardSize*boardSize; i++){
        const rowOfThree=[i, i+1, i+2]
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";
        if(invalidMoves.includes(i))continue;

        if (
            rowOfThree.every(
                (square: number) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            rowOfThree.forEach((square: number) => (newBoard[square] = ""));
            return true;
        }
    }
}