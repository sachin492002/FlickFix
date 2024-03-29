'use client'
import React, {useRef} from "react";
import {useAppSelector} from "@/lib/hooks";

import Image from "next/image";
import {FaArrowLeft, FaArrowRight, FaPlay} from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";


export default function BannerSlider(){
    const SlideRef:any = useRef();
    const {now_playing:trending} = useAppSelector((state:any)=>state.movie) || [];
    let settings = {
        dots: false,
        infinite: true,
        slidesPerRow : 1,
        speed: 500,
        slidesToShow: 1,
        autoplay : true,
        pauseOnHover: true,
        pauseOnFocus : true,
        slidesToScroll: 1,
        swipeToSlide : true,
        initialSlide: 0,
    };
    const handleNext = () => {
        SlideRef.current.slickNext();
    };

    const handlePrev = () => {
        SlideRef.current.slickPrev();
    };

    return(
        <div className='mt-0 md:-mt-36 mb-20 h-56 md:h-[100vh] w-full md:p-0'>
            <div
                className="hidden md:absolute top-1/3 z-10  inline-flex  gap-1 items-center text-2xl p-3 rounded-lg ">
                <button aria-label={'prev'} className='p-4 bg-primary-black  rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
                </button>

                <button aria-label={'next'} className='p-4 bg-primary-black rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
                </button>
            </div>
            <Slider
                ref={SlideRef}
                {...settings}
            >

                {
                    trending?.map((g: any) => {
                        return (
                            <div className={``} key={g.title}>
                                <Image placeholder='empty' priority={true}  src={process.env.NEXT_PUBLIC_PIC_PATH +'original' + g.backdrop_path} alt={g.name} width={1920} height={200} className='object-cover'/>
                                    <div className='absolute top-1/2 z-30 w-[50vw]'>
                                        <div className= 'flex movie-info flex-col gap-2 justify-start items-start bg-transparent rounded-lg'>
                                        <h3 className='text-md md:text-4xl'>{g.title}</h3>
                                        <p className='text-white-100 hidden md:block  line-clamp-3'>{g.overview}</p>
                                        <Link href={'/watch/movie/'+g.id}
                                            className='bg-primary flex gap-1 rounded-lg text-xs md:text-lg p-2 md:p-4 items-center'>
                                            <FaPlay/>
                                            Play Now
                                        </Link>
                                    </div>
                                    </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}