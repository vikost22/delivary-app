import { combineReducers } from "@reduxjs/toolkit";
import { deliveryApi } from "./services/deliveryApi";
import modalReducer from './features/modalSlice.js';
import deliveryReducer from './features/deliverySlice.js';

export const rootReducer = combineReducers({
    [deliveryApi.reducerPath]: deliveryApi.reducer,
    modal: modalReducer,
    delivery: deliveryReducer
});
