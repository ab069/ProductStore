// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Store cart items here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // Check if the product is already in the cart
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        // If product already exists, increase the quantity
       // existingProduct.quantity += 1;
      } else {
        // If product does not
        //  exist, add it to the cart with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const  productId  = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product ) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const  productId  = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product ) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      // Remove the product from the cart
      state.items = state.items.filter(item => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product && quantity >= 0) {
        product.quantity = quantity;
      }
    },




  },
});

export const { addToCart, removeFromCart, updateQuantity ,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
