'use Client'
import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  trending :null,
  now_playing:null,
  popular : null,
  top_rated : null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addTrending : (state,action) =>{
      state.trending = action.payload || null;

    },
    addNowPlaying : (state,action) =>{
      state.now_playing = action.payload || null;

    },
    addTopRated :(state,action) =>{
      state.top_rated = action.payload || null;
    }

  },
});

export const { addTrending,addNowPlaying,addTopRated } = movieSlice.actions;

export default movieSlice.reducer;
