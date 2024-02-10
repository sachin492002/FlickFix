import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react';
const playlistDetailsBaseUrl = process.env.API_MAIN;
type UseGetTrendingMoviesQuery = BaseQueryFn<

    FetchBaseQueryError,
    FetchBaseQueryMeta
>;
export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_MAIN,
        prepareHeaders: (headers) => {
          const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
          if (token) {
            headers.set('authorization', `Bearer ${token}`)
          }
          return headers
        },
  },

  ),
  endpoints: (builder) => ({
    getTrendingMovies : builder.query({query:()=>'trending/movie/day?language=en-US'}),
    getLatestMovies : builder.query({query:()=>'movie/now_playing?language=en-IN&page=1'}),
    getTopRatedMovies : builder.query({query:()=>'movie/top_rated?language=en-US&page=1'}),
    getMoviesByGenre : builder.query({query:(genre_id)=>`discover/movie?language=en-US&with_genres=${genre_id}&page=1`}),
    getMovieDetails : builder.query({ query:(movie_id) =>  `movie/${movie_id}?append_to_response=credits&language=en-US`}),
    getMovieVideo : builder.query({ query:(movie_id) =>  `/movie/${movie_id}/videos?language=en-US`}),
  }),
});

export const {useGetTrendingMoviesQuery ,useGetLatestMoviesQuery,useGetTopRatedMoviesQuery,useGetMovieDetailsQuery,useGetMoviesByGenreQuery,useGetMovieVideoQuery} = Api;
