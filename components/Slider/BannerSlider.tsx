import React, {useRef, useState} from "react";
import {useAppSelector} from "@/lib/hooks";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import {FaArrowLeft, FaArrowRight, FaPlay} from "react-icons/fa";


export default function BannerSlider(){
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

    const {trending} = useAppSelector((state)=>state.movie) || [];

    return(
        <div className='flex  items-center flex-wrap p-24 w-full'>
            <Swiper
                className='w-full relative  -z-10'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                ref={SlideRef}
                autoplay={{
                    pauseOnMouseEnter: true,
                    delay: 2,
                }}
                onSlideChange={onSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div
                    className="absolute top-0 z-10  inline-flex  gap-1 items-center text-2xl p-3 rounded-lg ">
                    <button className='p-4 bg-primary-black  rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
                    </button>

                    <button className='p-4 bg-primary-black rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
                    </button>
                </div>

                {
                    trending?.map((g) => {
                        return (
                            <SwiperSlide key={g.name}>
                                <div className={`w-full flex flex-row `}>
                                    <div className='flex flex-col gap-2 justify-center movie-info bg-primary-grey rounded-lg
                                     items-center  w-2/3'>
                                        <h1 className='text-4xl '>{g.name}</h1>
                                        <p className='text-primary-grey-text text-center line-clamp-3'>{g.description}</p>
                                        <button
                                            className='bg-primary flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                                            <FaPlay/>
                                            Play Now
                                        </button>
                                    </div>
                                    <img src={g.thumbnail} alt={g.name} className='object-cover w-1/3 '/>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}