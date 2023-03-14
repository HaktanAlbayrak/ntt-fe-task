import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../constant';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    const { data } = response;

    return data;
  }
);
