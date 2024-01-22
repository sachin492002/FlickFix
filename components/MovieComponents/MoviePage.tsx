
import SliderComponent from "@/components/Slider/SliderComponent";
import {genres} from "@/components/utils";
import {Movie} from "@/types";
import {useRef} from "react";
import SliderButtons from "@/components/Slider/SliderButtons";
import {use} from "ast-types";



interface Props{
    trending : [Movie],
    latest : [Movie],
}
export default function MoviePage({trending,latest}:Props){
    const SlideRef:any = useRef();
    const SlideRef1:any = useRef();
    const SlideRef2:any = useRef();
    const SlideRef3:any = useRef();
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className='flex relative w-full border-0 md:border-2 rounded-lg border-primary-grey flex-col px-2 py-4 md:px-12 md:py-20 gap-16'
             id='category'>
            <h1 className='absolute -top-5 z-10 rounded-lg bg-primary px-4 py-2'>Movies</h1>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Genres</h1>
                    <SliderButtons SlideRef={SlideRef}/>
                </div>
                <SliderComponent data={genres} reference={SlideRef} type={'genre'} settings={settings}/>
            </div>
            <div className='trending flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Trending Movies</h1><SliderButtons SlideRef={SlideRef1}/></div>
                <SliderComponent data={trending} reference={SlideRef1} type={'movie'} settings={settings}/>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Latest Releases</h1><SliderButtons SlideRef={SlideRef2}/></div>
                <SliderComponent data={latest} reference={SlideRef2} type={'movie'} settings={settings}/>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Top Rated Movies</h1><SliderButtons SlideRef={SlideRef3}/></div>
                <SliderComponent data={latest} reference={SlideRef3} type={'movie'} settings={settings}/>
            </div>
        </div>
    )
}