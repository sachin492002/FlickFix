'use client'
import SliderComponent from "@/components/Slider/SliderComponent";
import {genres} from "@/components/utils";
import {useRef} from "react";
import SliderButtons from "@/components/Slider/SliderButtons";
import {useAppDispatch} from "@/lib/hooks";
import {useGetLatestMoviesQuery, useGetTopRatedMoviesQuery, useGetTrendingMoviesQuery} from "@/lib/store/service";
import {addNowPlaying, addTopRated, addTrending} from "@/lib/store/movieSlice";
import MovieCardSkeleton from "@/components/MovieComponents/MovieCardSkeleton";
import BannerSlider from "@/components/Slider/BannerSlider";
import Link from "next/link";
import Image from "next/image";
import {GoStar} from "react-icons/go";


export default function MoviePage(){
    const dispatch = useAppDispatch();
    const {data:datat, isFetching:isFetching1 } = useGetTrendingMoviesQuery(0);
    dispatch(addTrending(datat?.results));
    const {data:data1,isFetching:isFetching2} = useGetLatestMoviesQuery(0);
    dispatch(addNowPlaying(data1?.results));
    const {data:data2,isFetching:isFetching3} = useGetTopRatedMoviesQuery(0);
    dispatch(addTopRated(data2?.results));

    const SlideRef:any = useRef();
    const SlideRef1:any = useRef();
    const SlideRef2:any = useRef();
    const SlideRef3:any = useRef();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots : false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    dots:false,
                }
            }
        ]
    };


    return(
        <div className={'flex w-full flex-col px-2 py-4 md:pb-12 md:px-12 items-center'}>
            <BannerSlider/>
        <div className='flex relative w-full border-0 md:border-2 rounded-lg border-primary-grey flex-col px-2 py-4 md:px-12 md:py-20 gap-16'
             id='category'>
            <h1 className='absolute -top-5 z-10 rounded-lg bg-primary px-4 py-2'>Movies</h1>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Genres</h1>
                    <SliderButtons SlideRef={SlideRef}/>
                </div>
                <SliderComponent  data={genres} reference={SlideRef} type={'genre'} settings={settings}/>
            </div>
            <div className='trending flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Trending Movies</h1><SliderButtons SlideRef={SlideRef1}/></div>
                <SliderComponent data={datat?.results} reference={SlideRef1} type={'movie'} settings={settings}/>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Latest Releases</h1><SliderButtons SlideRef={SlideRef2}/></div>
                <SliderComponent data={data1?.results} reference={SlideRef2} type={'movie'} settings={settings}/>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Top Rated Movies</h1><SliderButtons SlideRef={SlideRef3}/></div>
                <SliderComponent data={data2?.results} reference={SlideRef3} type={'movie'} settings={settings}/>
            </div>
        </div>
        </div>
    )
}