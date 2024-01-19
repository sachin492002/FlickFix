'use client'


import {Movie} from "@/types";
import {getMovie} from "@/lib/actions";
import ReactPlayer from "react-player";

export default async function Page({ params }: { params: { slug: string } }){
    const movie_id = params.slug;
    // const data:string = await getMovie(movie_id);
    // const movie:Movie = JSON.parse(data);
    // console.log(movie)
    return(
        <div className='flex w-full justify-center items-center mt-44'>
            <ReactPlayer url={'https://youtu.be/d9MyW72ELq0?si=_LJdsba1xYTeiS8P'} controls={true} width={1024} height={720}/>
        </div>
    )
}