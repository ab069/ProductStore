// src/features/productStoreSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch product data (using a mock API or local JSON)
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get('/path/to/products'); // replace with actual API
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

const initialState = {
  products: [],
  cart: [],
  filteredProducts: [],
  loading: false,
  error: null,
  filters: {
    category: '',
    priceRange: [0, 100],
  },
};

const productStoreSlice = createSlice({
  name: 'productStore',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find(item => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    filterProducts: (state) => {
      const { category, priceRange } = state.filters;
      state.filteredProducts = state.products.filter(product => {
        const isInCategory = category ? product.category === category : true;
        const isInPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
        return isInCategory && isInPriceRange;
      });
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredProducts = state.products.filter(product => {
        const isInCategory = state.filters.category ? product.category === state.filters.category : true;
        const isInPriceRange = product.price >= state.filters.priceRange[0] && product.price <= state.filters.priceRange[1];
        return isInCategory && isInPriceRange;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch products';
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, setFilters, filterProducts } = productStoreSlice.actions;
export default productStoreSlice.reducer;
