'use client'


import ReactPlayer from "react-player";
import {useGetMovieDetailsQuery, useGetMovieVideoQuery} from "@/lib/store/service";
import YouTube from "react-youtube";
import SliderComponent from "@/components/Slider/SliderComponent";
import {useRef} from "react";
import StarRatings from 'react-star-ratings'
import SliderButtons from "@/components/Slider/SliderButtons";
import {FaArrowLeft, FaArrowRight, FaStar, FaWindows} from "react-icons/fa";
import {CiCalendar} from "react-icons/ci";
import {IoLanguageOutline} from "react-icons/io5";
import Image from "next/image";
import {GiMusicalNotes} from "react-icons/gi";

export default function Page({ params }: { params: { slug: string } }){
    const movie_id = params.slug;
    const {data:movie ,isFetching} = useGetMovieDetailsQuery(movie_id);
    const {data:videos, isFetching: Fetch1} = useGetMovieVideoQuery(movie_id);
    const Slidref:any = useRef();

    const handleNext = () => {
        Slidref.current.slickNext();
    };

    const handlePrev = () => {
        Slidref.current.slickPrev();
    };
    if(isFetching) return <h1>Loading</h1>;
    if(Fetch1) return <h1>Loading</h1>;
    const trailer = videos.results.find((el:any)=> el.type == 'Trailer');
    const directors = movie.credits.crew.filter((el:any)=> el.job == 'Director');
    const sound = movie.credits.crew.find((x:any)=> x.department == 'Sound');
    let settings = {
        dots: false,
        infinite: false,
        slidesPerRow : 1,
        speed: 500,
        slidesToShow: 6,
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
    return (
        <>
            <div className=' aspect-video '>
                <iframe
                    className='w-full h-full rounded-lg'
                    src={`https://www.youtube.com/embed/${trailer.key}?controls=0&showinfo=0`}
                    width="100%"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
            <div className='flex flex-col md:flex md:flex-row w-full px-2 py-4 md:px-10 md:py-10 gap-5'>
                <div className='w-full md:w-2/3 flex gap-10  flex-col'>
                    <div className='flex flex-col text-start bg-primary-grey rounded-lg p-10'>
                        <h1 className='text-primary-grey-text'>Description</h1>
                        <span className='text-white text-sm'>{movie.overview}</span>
                    </div>

                    <div className='flex items-end flex-col text-start bg-primary-grey rounded-lg p-2 md:p-10'>
                        <div className='inline-flex gap-2'>
                        <button className='p-4 bg-primary-black rounded-lg' onClick={() => handlePrev()}><FaArrowLeft/>
                        </button>
                        <button className='p-4 bg-primary-black rounded-lg' onClick={() => handleNext()}><FaArrowRight/>
                        </button>
                        </div>
                        <SliderComponent data={movie.credits.cast} type={'cast'} reference={Slidref}
                                         settings={settings}/>
                    </div>
                </div>
                <div className='w-full md:w-1/3 bg-primary-grey p-5 flex flex-col gap-6 rounded-lg '>
                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            <CiCalendar className='text-2xl'/>
                            Released date
                        </div>
                        <h1>{movie.release_date}</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            <IoLanguageOutline className='text-2xl'/>
                            Language
                        </div>
                        <h1>{movie.spoken_languages[0]?.name}</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            <FaStar className='text-2xl'/>
                            Ratings
                        </div>
                        <div className='inline-flex items-center gap-2'>
                            <StarRatings
                                starDimension='1rem'
                                starSpacing='0.1rem'
                                rating={movie.vote_average / 2}
                                starRatedColor="red"
                                numberOfStars={5}
                            />
                            <h1>{(movie.vote_average / 2).toFixed(1)}/5</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            <FaWindows className='text-2xl'/>
                            Genres
                        </div>
                        <div className='inline-flex flex-wrap gap-4'>
                            {
                                movie.genres.map((g: any) => {
                                    return (
                                        <span className={'bg-primary-black px-4 py-2 rounded-lg'}>
                                        {g.name}
                                    </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            Director
                        </div>
                        <div className='flex flex-col flex-wrap gap-4'>
                            {
                                directors.map((g: any) => {
                                    return (
                                        <div className='flex p-2 items-center gap-2 flex-row'>
                                            <Image className={'rounded-lg object-cover'} src={process.env.NEXT_PUBLIC_PIC_PATH+'w500'+g.profile_path} width={56} height={60} alt={'no'}/>
                                            <div className={'flex flex-col gap-2'}>
                                                <h1>{g.name}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='inline-flex gap-2 text-primary-grey-text items-center'>
                            <GiMusicalNotes className='text-2xl'/>
                            Sound
                        </div>
                        <div className='inline-flex items-center p-2 flex-wrap gap-2'>
                            <Image className={'rounded-lg object-cover'} src={process.env.NEXT_PUBLIC_PIC_PATH+'w500'+sound.profile_path} width={56} height={60}  alt={'no'}/>
                        <h1>{sound.name}</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}