import {numBerOfClicksReducer} from './redux/reducers'
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
    reducer: {numberOfClicks: numBerOfClicksReducer}
})