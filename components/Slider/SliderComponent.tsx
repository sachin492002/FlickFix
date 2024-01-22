'use client'
import Slider from 'react-slick';

import GenreCard from "@/components/GenreCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "@/components/MovieComponents/MovieCard";
import {useRef} from "react";

interface Props{
    data : any,
    type :String,
    reference : any,
}
export default function SliderComponent({data,type,reference}:Props){

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
        dots: true,
        infinite: true,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (<>

    <Slider
        className='inline-flex w-full'
        ref = {reference} {...settings}
    >
        {
            data?.map((g:any) => {
                return (
                    <div key={g.name} className='inline-flex justify-center gap-4  md:gap-10'>
                        {(type=='genre') ? <GenreCard genre={g}/> : <MovieCard movie={g}/>}
                    </div>
                )
            })
        }
    </Slider>

        </>
)
}

