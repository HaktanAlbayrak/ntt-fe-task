import { configureStore } from '@reduxjs/toolkit';

import product from '../components/Product/store';

const store = configureStore({
  reducer: { product },
});

export default store;
