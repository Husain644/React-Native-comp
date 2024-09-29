import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        initialState:10,
        name:'counter',
        reducers:{
            increment:(state,action)=>state+action.payload,
            decrement:(state,action)=>state-action.payload
        },
    }
);

export const {decrement,increment} = counterSlice.actions;
export default counterSlice.reducer;