

import Slider from "@/components/Slider/Slider";
import {genres} from "@/components/utils";



export default function Category(){


    return(
        <div className='flex flex-col px-12 py-20 gap-16 overflow-clip' id='category'>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Explore our wide variety of
                    categories</h1><p>Whether you are
                    looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
                    something new</p></div>
               <Slider data={genres} type={'genre'}/>
            </div>
        </div>
    )
}