import {FaPlay} from "react-icons/fa";
import Link from "next/link";


export default function WatchNow(){
    return(
        <div className='homegrid relative flex flex-col gap-5 p-5 '>
            <img src='/homegrid/Row-1.png' alt='jk'/>
            <img src='homegrid/Row-2.png' alt='jk'/>
            <img src='homegrid/Row-3.png' alt='jk'/>
            <img src='homegrid/Row-4.png' alt='jk'/>
            <div className='flex absolute top-28 flex-col items-center watchnow -z-1'>
            <img src={'/home.svg'}/>
            <div className='px-40 flex items-center flex-col gap-6'>
            <h1 className='text-4xl text-center'>The Best Streaming Experience</h1>
            <p className='text-primary-grey-text text-center'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <Link href={'/movies'}><button className='bg-primary flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                <FaPlay/>
                Start Watching Now
            </button>
            </Link>
            </div>
        </div>
        </div>
        
    )
}