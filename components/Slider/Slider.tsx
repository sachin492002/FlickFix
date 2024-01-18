'use client'
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";
import GenreCard from "@/components/GenreCard";
import {useRef, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from "@/components/MovieComponents/MovieCard";

export default function Slider({data,type}){
    const [slideBegOrNot, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
    });
    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };

    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper) => {

        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };

    const { isLast, isFirst } = slideBegOrNot;
    return (<>
        <div
            className="swiper-nav-btns inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
            <button className='p-4 bg-primary-grey rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
            </button>
            <div className='pills inline-flex gap-1 items-center justify-center'>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
            </div>
            <button className='p-4 bg-primary-grey rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
            </button>
        </div>
    <Swiper
        className='w-full '
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        ref={SlideRef}
        onSlideChange={onSlideChange}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
    >

        {
            data.map((g) => {
                return (
                    <SwiperSlide key={g.name}>
                        {(type=='genre') ? <GenreCard genre={g}/> : <MovieCard movie={g}/>}
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
        </>
)
}

