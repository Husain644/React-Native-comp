import { configureStore } from '@reduxjs/toolkit'
import countReducer  from './slices/counter'

export const store= configureStore({
    reducer:{
        counter:countReducer
    }
 
})
