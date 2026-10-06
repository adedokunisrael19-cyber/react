import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import newsletterReducer from './newsLetterSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    newsletter : newsletterReducer,
  },
});