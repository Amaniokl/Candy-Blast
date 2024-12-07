// import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";

const initialState:{
    board: string[];
    boardSize:number;
}={
    board: [],
    boardSize: 8,
    squareBeingDragged:undefined,
    squareBeingReplaced:undefined,
};
const candyCrushSlice=createSlice({
    name:"candyCrush",
    initialState,
    reducers:{
        updateBoard: (state, action: PayloadAction<string[]>)=>{
            state.board=action.payload;
        },
        dragStart:(state, action: PayloadAction<string[]>)=>{
            state.board=action.payload;
        }
        dragDrop:(state, action: PayloadAction<any>)=>{
            state.squareBeingReplaced=action.payload;
        },
        dragEnd: dragEndReducer,
        // moveBelow: moveBelowReducer
        moveBelow: moveBelowReducer,
    },
});

export const store=configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getFefaultMiddleware({
            serializableCheck: false,
        })
});

export const {updateBoard, moveBelow}=candyCrushSlice.actions
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;