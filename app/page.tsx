'use client'
import HomePage from "@/components/Homepage/HomePage";
import {getLatest, getTrending} from "@/lib/actions";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {addLatest, addTrending} from "@/lib/store/movieSlice";



export default  function Home() {

    const dispatch = useAppDispatch();
    const {status,trending } = useAppSelector(state=> state.movie) ;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (status === 'idle') {
                    const data = await getTrending();
                    dispatch(addTrending(JSON.parse(data)));
                    const data1 = await  getLatest();
                    dispatch(addLatest(data1));
                    console.log(JSON.parse(data));
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
