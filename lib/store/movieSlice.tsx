'use Client'
import { createSlice } from '@reduxjs/toolkit';
import {getTrending} from "@/lib/actions";


const initialState = {
  trending :null,
  latest : null,
  movies: null,
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
    addMovies : (state,action) =>{
      state.movies = action.payload || null;
      state.status = 'success';
    },
  },
});

export const { addTrending,addLatest,addMovies } = movieSlice.actions;

export default movieSlice.reducer;
