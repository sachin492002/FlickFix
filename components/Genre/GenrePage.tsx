'use client'
import {Genre, Movie} from "@/types";
import MovieCard from "@/components/MovieComponents/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from "react";
import {genres} from "@/components/utils";

interface Props {
    type: string,
    url: any,
}

export default function GenrePage({type, url}: Props) {
    const [movies, setItems] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    if (type == 'genre') {
        var genrename = genres.find((el: Genre) => el.id == url);
    }
    const [lastPage,setlastPage] = useState(false);
    const [page, setPage] = useState(1);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch((type == 'genre') ? `${process.env.NEXT_PUBLIC_API_MAIN}discover/movie?language=en-US&page=${page}&with_genres=${url}` : `${process.env.NEXT_PUBLIC_API_MAIN}search/movie?query=${url}&language=en-US&page=${page}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                },
            });
            const data = await response.json();
            const rdata = data.results;
            console.log(rdata)

            setItems(prevItems => [...prevItems, ...rdata]);
            setPage(prevPage => prevPage + 1);
            if (rdata.length == 0) {
                setlastPage(true);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setItems([]);
        setlastPage(false);
        setPage(1);
        fetchData();
    }, [url]);
    return (

        <div className='mt-0 px-2 py-10 md:px-12 gap-4 flex flex-col '>
            <h1 className={type != 'genre' ? 'text-4xl font-bitter' : 'hidden'}>Search Results for <span
                className='text-primary font-bold capitalize'>{url}</span></h1>
            <div className='relative border-2 border-primary-grey px-1 py-10 md:px-12 md:py-12 rounded-lg'>
                <h3 className={type == 'genre' ? 'absolute -top-5 z-10 bg-primary text-4xl font-bitter capitalize px-4 py-2 rounded-lg' : 'hidden'}>{genrename?.name}</h3>
                <InfiniteScroll
                    dataLength={movies.length}
                    className='w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2'
                    next={fetchData}
                    hasMore={!lastPage}
                    loader={<p>Loading...</p>}
                    endMessage={<p>No more data to load.</p>}
                >
                    {
                        movies?.map((movie) => {

                            return <>
                                <div className='col-span-1'>
                                    <MovieCard movie={movie} key={movie.title}/>
                                </div>
                            </>
                        })
                    }</InfiniteScroll>

            </div>
        </div>
    )
}