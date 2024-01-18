import Category from "@/components/Homepage/Category";
import Slider from "@/components/Slider/Slider";
import {genres} from "@/components/utils";
import {Movie} from "@/types";


interface Props{
    trending : [Movie],
    latest : [Movie],
}
export default function MoviePage({trending,latest}:Props){

    return(
        <div className='flex relative w-full border-2 rounded-lg border-primary-grey flex-col px-12 py-20 gap-16' id='category'>
            <h1 className='absolute -top-5 z-10 rounded-lg bg-primary px-4 py-2'>Movies</h1>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Genres</h1><p></p></div>
                <Slider data={genres} type={'genre'}/>
            </div>
            <div className='trending flex gap-1 justify-between flex-wrap'>
                <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Trending Movies</h1><p></p></div>
                <Slider data={trending} type={'movie'}/>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Latest Releases</h1><p></p></div>
                <Slider data={latest} type={'movie'}/>
            </div>

        </div>
    )
}