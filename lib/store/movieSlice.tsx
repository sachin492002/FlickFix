'use Client'
import { createSlice } from '@reduxjs/toolkit';
import {getTrending} from "@/lib/actions";


const initialState = {
  trending :null,
  latest : [],
  movies: [],
  status: 'idle',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addTrending : (state,action) =>{
      state.trending = action.payload || null;
      state.status = 'success';
    },
    addLatest : (state,action) =>{
      state.latest = action.payload || null;
      state.status = 'success';
    },

  },
});

export const { addTrending,addLatest } = movieSlice.actions;

export default movieSlice.reducer;
