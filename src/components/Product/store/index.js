import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { getProducts } from './actions';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    favoriteItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteItems = [...state.favoriteItems, action.payload];
    },
    deleteFavorite: (state, action) => {
      const filteredFavorite = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
      state.favoriteItems = filteredFavorite;
    },
  },
  extraReducers: {
    [getProducts.rejected]: (state, action) => {
      state.items = [];
      state.error = action.error.message;
      state.status = 'failed';
    },
    [getProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, action) => {
      if (action.payload.length > 0) {
        state.status = 'succeeded';
        state.items = action.payload;
      } else {
        state.items = [];
        state.status = 'idle';
      }
    },
  },
});

export const useProducts = () => useSelector((state) => state.product);

export * from './actions';
export const { addFavorite, deleteFavorite } = productSlice.actions;
export default productSlice.reducer;
