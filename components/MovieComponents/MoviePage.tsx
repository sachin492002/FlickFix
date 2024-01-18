import Category from "@/components/Homepage/Category";
import Slider from "@/components/Slider/Slider";
import {genres} from "@/components/utils";


export default function MoviePage(){
    return(
            <div className='flex w-full flex-col px-12 py-20 gap-16 ' id='category'>
                <div className='flex gap-1 justify-between flex-wrap'>
                    <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Genres</h1><p></p></div>
                    <Slider data={genres} type={'genre'}/>
                </div>
            </div>
    )
}