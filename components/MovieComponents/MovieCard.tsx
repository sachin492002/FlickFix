
import {Movie} from "@/types";
import {GoClock} from "react-icons/go";
import Link from "next/link";

interface Props{
    movie : Movie,
}

export default function MovieCard({movie}:Props){
    return(

        <Link href={'/movies/movie/'+movie._id} className='category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
            <img src={movie.thumbnail} alt='no' className='rounded-lg w-72 h-96 object-cover'/>
            <div className='inline-flex justify-between text-md  items-center '>
                <h1 className='capitalize line-clamp-1 w-1/2'>{movie.name}</h1>
                <div className='inline-flex gap-1 items-center bg-primary-card-grey px-2 rounded-2xl'>
                   <GoClock/>
                    {movie.duration}
                </div>
            </div>
        </Link>
    )
}