'use client'
import SliderComponent from "@/components/Slider/SliderComponent";

import {useRef, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {genres} from "@/components/utils";


export default function Category(){
    const SlideRef:any = useRef();
    const [slideIndex,setSlideIndex] = useState(0);
    const handleNext = () => {
        SlideRef.current.slickNext();
    };

    const handlePrev = () => {
        SlideRef.current.slickPrev();
    };
    let settings = {
        customPaging: function(i:number) {
            return (
                <div className='bg-primary-grey-text w-4 dotclass h-1.5 rounded-lg'>
                </div>
            );
        },
        appendDots: (dots:any) => (
            <div
                className=''
            >
                <ul className='m-0 flex justify-center'> {dots} </ul>
            </div>
        ),
        afterChange: (current :number) => {
                   setSlideIndex((100/genres.length * (4+current) ));
        },
        dots: true,
        infinite: false,
        slidesPerRow : 1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide : true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    afterChange: (current :number) => {
                        setSlideIndex((100/genres.length * (2+current)) );
                    },
                }
            }
        ]
    };
    return(
        <div className='flex flex-col items-center px-6 md:px-12 py-20 gap-16 overflow-clip' id='category'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'><h2 className='font-manrope text-3xl'>Explore our wide variety of
                    categories</h2><p className='text-primary-grey-text text-start'>Whether you are
                    looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
                    something new</p></div>
                <div
                    className="swiper-nav-btns hidden md:inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
                    <button aria-label='prev' className='p-4 bg-primary-grey rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
                    </button>
                    <div className='pills inline-flex w-24 gap-1 items-center justify-center'>
                        <div className="bg-primary-grey w-full rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full transition duration-300 ease-in"
                                 style={{width: slideIndex}}></div>
                        </div>
                    </div>
                    <button aria-label={'next'} className='p-4 bg-primary-grey rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
                    </button>
                </div>
            </div>
            <SliderComponent data={genres} type={'genre'} reference={SlideRef} settings={settings}/>
            <div className="bg-primary-grey block md:hidden w-1/2  rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full transition duration-300 ease-in"
                     style={{width: slideIndex}}></div>
            </div>
        </div>
    )
}