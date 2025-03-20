//Slice jsx 
import { createSlice } from "@reduxjs/toolkit"
const initialCouter=  {count:0}
const counterSlice=createSlice({
    name:'count',initialState:initialCouter,reducers:{
        increament:(state,action)=>{state.count =state.count + action.payload},
        decreament:(state,action)=>{state.count =state.count - action.payload}}  
})
export const{increament,decreament}=counterSlice.actions;
export default counterSlice.reducer;

// store jsx
import { configureStore } from "@reduxjs/toolkit";
import countReducer  from './userSlice'

const store=configureStore({
    reducer:{
        counter:countReducer
    }
 
})

// providers
const Home=()=>{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

// get data
import { useSelector } from "react-redux"
const counter=useSelector(state=>state.counter.count)

// sendData
import { useDispatch } from "react-redux"
import {increament} from './userSlice'
const dispatch = useDispatch()

const send=()=>{
    dispatch(increament(5))
}