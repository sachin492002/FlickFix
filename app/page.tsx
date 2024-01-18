'use client'
import HomePage from "@/components/Homepage/HomePage";
import {getAllMovies, getLatest, getTrending} from "@/lib/actions";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {addLatest, addMovies, addTrending} from "@/lib/store/movieSlice";



export default  function Home() {

    const dispatch = useAppDispatch();
    const {status,trending } = useAppSelector((state:any)=> state.movie) ;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (status === 'idle') {
                    const data:any = await getTrending();
                    dispatch(addTrending(JSON.parse(data)));
                    const data1:any = await  getLatest();
                    dispatch(addLatest(JSON.parse(data1)));
                    const alldata:any = await getAllMovies();
                    dispatch(addMovies(JSON.parse(alldata)));
                }
            } catch (error) {
                console.error('Error fetching trending data:', error);

            }
        };

        fetchData();
    }, [status, dispatch]);



    return (
        <>
            <HomePage />
        </>
    );
}
