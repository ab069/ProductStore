// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/api/productsApi';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,  // API reducer
    cart: cartReducer,  // Cart reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
