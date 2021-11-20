import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";
import {productsApi} from "../reducers/productsApi";
import cartReducer from '../reducers/cartSlice';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});


export default store;