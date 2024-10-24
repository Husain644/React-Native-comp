import { createSlice } from "@reduxjs/toolkit"

const initialCouter=  {count:0}

const counterSlice=createSlice({
    name:'count',initialState:initialCouter,reducers:{
        increament:(state,action)=>{state.count =state.count + action.payload},
        decreament:(state,action)=>{state.count =state.count - action.payload}}  
})
export const{increament,decreament}=counterSlice.actions;
export default counterSlice.reducer;