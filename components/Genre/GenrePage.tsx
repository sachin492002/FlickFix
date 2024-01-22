'use client'
import {Genre, Movie} from "@/types";
import MovieCard from "@/components/MovieComponents/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from "react";
import {genres} from "@/components/utils";

interface Props{
    genre: number,
}
export default function GenrePage({genre}:Props){
    const [movies, setItems] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const genrename = genres.find((el:Genre)=> el.id == genre );
    const [page, setPage] = useState(1);
    const fetchData = async () => {
        setIsLoading(true);


        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_MAIN}discover/movie?language=en-US&page=${page}&with_genres=${genre}`,{
                method : 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
                },
            });
            const data = await response.json();
            const rdata = data.results;
            console.log(data)
            setItems( prevItems  => [...prevItems, ...rdata]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return(

        <div className='mt-44 px-12  flex flex-col '>
            <div className='relative border-2 border-primary-grey px-12 py-12 rounded-lg'>
                <h1 className='absolute -top-5 z-10 bg-primary text-4xl font-bitter capitalize px-4 py-2 rounded-lg'>{genrename?.name}</h1>
                    <InfiniteScroll
                        dataLength={movies.length}
                        className='w-full grid grid-cols-4 gap-10'
                        next={fetchData}
                        hasMore={true}
                        loader={<p>Loading...</p>}
                        endMessage={<p>No more data to load.</p>}
                    >
                    {
                        movies?.map((movie) => {

                            return<>
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