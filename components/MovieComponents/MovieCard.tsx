import {Movie} from "@/types";
import {GoStar} from "react-icons/go";
import Link from "next/link";
import Image from 'next/image'

interface Props{
    movie : Movie,
}

export default function MovieCard({movie}:Props){
    return(
           <div className='mr-2 md:mr-10'>
        <Link href={'/watch/movie/'+movie.id} className='category-card p-1 md:p-4 border-2 flex flex-col gap-2 border-primary-grey rounded-lg'>
            <Image placeholder='empty' loading={'lazy'}  alt='klpd' src={process.env.NEXT_PUBLIC_PIC_PATH +'w500' + movie.poster_path} width={260} height={400} className='rounded-lg object-cover'/>
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