import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
import {Genre} from "@/types";
import Image from 'next/image'
interface Props {
    genre : Genre,
}
export default function GenreCard({genre}:Props){

    return(
        <div className='md:mr-10 mr-2'>
            <Link href={'/watch/genre/'+genre.id}  className='category-card   border-2  flex flex-col gap-2 border-primary-grey bg-red-700 rounded-lg p-4'>
                <Image placeholder='empty' loading={'lazy'}  src={genre.imgsrc} width={400} height={400} alt='no' />
                <div className='inline-flex justify-between items-center '>
                    <h4 className='capitalize text-xs md:text-md'>{genre.name}</h4>
                    <FaArrowRight/>
                </div>
            </Link>
        </div>
    )
}