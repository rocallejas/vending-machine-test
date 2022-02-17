import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../reducers/orderSlice';

export default configureStore({
  reducer: {
    order: orderReducer,
  },
})