'use Client'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useRef, useState} from "react";



export default function SwiperNavBtns(){

    return (
        <div
            className="swiper-nav-btns inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
            <button className='p-4 bg-primary-grey rounded-lg' onClick={()=> handlePrev()}><FaArrowLeft/></button>
            <div className='pills inline-flex gap-1 items-center justify-center'>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
                <div className='w-4 h-1 bg-green-500'></div>
            </div>
            <button className='p-4 bg-primary-grey rounded-lg' onClick={()=> handleNext()}><FaArrowRight/></button>
        </div>
    )
}