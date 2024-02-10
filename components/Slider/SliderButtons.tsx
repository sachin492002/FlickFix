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
            <div className="pills inline-flex w-24 gap-1 items-center justify-center">
            <div className="bg-primary-grey w-full rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition duration-300 ease-in"
                style={{ width: slideIndex }}
              ></div>
            </div>
          </div>
            <button aria-label={'next'} className='p-4 bg-primary-grey rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
            </button>
        </div>
    )
}