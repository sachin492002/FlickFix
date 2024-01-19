'use client'


import {Movie} from "@/types";
import {getMovie} from "@/lib/actions";
import ReactPlayer from "react-player";

export default async function Page({ params }: { params: { slug: string } }){
    const movie_id = params.slug;
    const data:string = await getMovie(movie_id);
    const movie:Movie = JSON.parse(data);
    return(
        <div className='flex w-full'>
            <ReactPlayer url={movie.streamlinks[0]} controls={true} />
        </div>
    )
}