
import { configureStore } from '@reduxjs/toolkit';


import movieReducer from './movieSlice';
import {Api} from "@/lib/store/service";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware),
});
