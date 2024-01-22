
import {Movie} from "@/types";
import {GoClock, GoStar} from "react-icons/go";
import Link from "next/link";
import Image from 'next/image'
interface Props{
    movie : Movie,
    innerRef?: (node ?: Element | null | undefined) => void
}

export default function MovieCard({movie,innerRef}:Props){
    return(
           <div className='md:mr-1 mr-2' ref={innerRef}>
        <Link href={'/movies/movie/'+movie.id} className='category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
            <Image alt='klpd' src={process.env.NEXT_PUBLIC_PIC_PATH +'w500' + movie.poster_path} width={500} height={500} className='rounded-lg object-cover'/>
            <div className='inline-flex justify-between text-md  items-center '>
                <h1 className='capitalize line-clamp-1 w-1/2'>{movie.original_title}</h1>
                <div className='inline-flex gap-1 items-center bg-primary-card-grey px-2 rounded-2xl'>
                   <GoStar/>
                    {movie.vote_average}
                </div>
            </div>
        </Link>
           </div>
    )
}