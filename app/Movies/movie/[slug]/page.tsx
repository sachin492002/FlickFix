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
            <ReactPlayer url={'https://vdncloud.org/movies/iframe/d04xdksxRG5GTXZpRTRpM2lmSmlIOS9PY3d6QzIwMW83ZEZFbU1pUm5vSlZVVnBtMk9iRmJNTUdWdz09'} controls={true} />
        </div>
    )
}