import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


export default function SliderButtons({SlideRef}:any){
    const handleNext = () => {
        SlideRef.current.slickNext();
    };

    const handlePrev = () => {
        SlideRef.current.slickPrev();
    };
    return (
        <div
            className="swiper-nav-btns hidden md:inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
            <button aria-label={'prev'} className='p-4 bg-primary-grey rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
            </button>
            <div className='pills inline-flex gap-1 items-center justify-center'>

            </div>
            <button aria-label={'next'} className='p-4 bg-primary-grey rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
            </button>
        </div>
    )
}