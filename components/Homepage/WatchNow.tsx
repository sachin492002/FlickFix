import {FaPlay} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import home from '../../public/home.svg'


export default function WatchNow(){
    return(
        <div className='homegrid flex  flex-col gap-5'>
            <div className='flex flex-col mt-40 items-center watchnow overflow-clip' >
            <Image placeholder='empty'  src={home} className='' loading='lazy'  alt={'no'}/>
            <div className='px-10 md:px-40 flex items-center flex-col gap-2 md:gap-6'>
            <p className=' text-xl md:text-4xl  text-center'>The Best Streaming Experience</p>
            <p className='text-primary-grey-text text-center line-clamp-2 md:line-clamp-5'>StreamJet is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamJet, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <Link href={'/Movies'}><button className='bg-primary flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                <FaPlay/>
                Start Watching Now
            </button>
            </Link>
            </div>
        </div>
        </div>
        
    )
}