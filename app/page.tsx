'use client'
import HomePage from "@/components/Homepage/HomePage";

import {useGetLatestMoviesQuery, useGetTopRatedMoviesQuery, useGetTrendingMoviesQuery} from "@/lib/store/service";
import {useEffect} from "react";
import {addNowPlaying, addTopRated, addTrending} from "@/lib/store/movieSlice";
import {useAppDispatch} from "@/lib/hooks";


export default  function Home() {
    const dispatch = useAppDispatch();
    const {data:datat} = useGetTrendingMoviesQuery();
    dispatch(addTrending(datat?.results));
    const {data:data1} = useGetLatestMoviesQuery();
    dispatch(addNowPlaying(data1?.results));
    const {data:data2} = useGetTopRatedMoviesQuery();
    dispatch(addTopRated(data2?.results));

    return (
        <>
            <HomePage />
        </>
    );
}
