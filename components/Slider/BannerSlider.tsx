import React, {useRef, useState} from "react";
import {useAppSelector} from "@/lib/hooks";
import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
        <div className='-mt-32 mb-20 w-full md:p-0'>
            <div
                className="hidden md:absolute top-1/3 z-10  inline-flex  gap-1 items-center text-2xl p-3 rounded-lg ">
                <button className='p-4 bg-primary-black  rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
                </button>

                <button className='p-4 bg-primary-black rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
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
                                <Image src={process.env.NEXT_PUBLIC_PIC_PATH +'original' + g.backdrop_path} alt={g.name} width={1920} height={200} className='object-cover'/>
                                    <div className='absolute top-1/2 z-30 w-[50vw]'>
                                        <div className= 'flex movie-info flex-col gap-2 justify-start items-start bg-transparent rounded-lg'>
                                        <h1 className='text-md md:text-4xl'>{g.title}</h1>
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