'use client'


import ReactPlayer from "react-player";
import {useGetMovieDetailsQuery, useGetMovieVideoQuery} from "@/lib/store/service";
import YouTube from "react-youtube";

export default function Page({ params }: { params: { slug: string } }){
    const movie_id = params.slug;
    const {data:movie ,isFetching} = useGetMovieDetailsQuery(movie_id);
    const {data:videos, isFetching: Fetch1} = useGetMovieVideoQuery(movie_id);
    if(isFetching) return <h1>Loading</h1>;

    if(Fetch1) return <h1>Loading</h1>;
    const trailer = videos.results.find((el:any)=> el.type == 'Trailer');
    return (
        <>
            <div className=' aspect-video '>
                <iframe
                    className='w-full rounded-lg'
                    src={`https://www.youtube.com/embed/${trailer.key}?controls=0&showinfo=0`}
                    width="100%"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>


            </div>
            <div className='inline-flex w-full px-10'>
<div className='w-2/3 flex flex-col'>
    <div className='flex flex-col text-start bg-primary-grey rounded-lg p-10'>
         <h1 className='text-primary-grey-text'>Description</h1>
        <span className='text-white'>{movie.overview}</span>
    </div>


</div>
                <div className='w-1/3 '>

                </div>
            </div>
        </>

    )
}