

import SliderComponent from "@/components/Slider/SliderComponent";
import {genres} from "@/components/utils";
import {useRef} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


export default function Category(){
    const SlideRef:any = useRef();

    const handleNext = () => {
        SlideRef.current.slickNext();
    };

    const handlePrev = () => {
        SlideRef.current.slickPrev();
    };
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
        <div className='flex flex-col px-6 md:px-12 py-20 gap-16 overflow-clip' id='category'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'><h1 className='font-manrope text-3xl'>Explore our wide variety of
                    categories</h1><p className='text-primary-grey-text text-start'>Whether you are
                    looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
                    something new</p></div>
                <div
                    className="swiper-nav-btns hidden md:inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
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
            </div>
            <SliderComponent data={genres} type={'genre'} reference={SlideRef}/>
        </div>
    )
}