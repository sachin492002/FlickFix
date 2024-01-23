import SliderButtons from "@/components/Slider/SliderButtons";

import {useRef} from "react";

const Banner = () =>{
    return (
        <div className="mt-0 md:-mt-36 mb-20 w-full  border border-primary-grey rounded shadow animate-pulse">
            <div className="flex items-center relative -z-10 justify-center h-[100vh] bg-gray-800 rounded ">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" viewBox="0 0 16 20">
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
                <div className="absolute top-1/2 left-0 z-10">
                    <div className="h-2.5 bg-gray-600 rounded-full w-96 mb-4"></div>
                    <div className="h-2.5  bg-gray-600 rounded-full  w-48 mb-4"></div>
                    <div className="h-10  bg-gray-600 rounded-lg w-24 mb-4"></div>
                </div>
            </div>
        </div>

    )
}
const MoviesCard = () => {
    return (
        <div className="p-4 border border-primary-grey rounded shadow animate-pulse md:p-6 ">
            <div className="flex items-center justify-center h-80 w-56 mb-4 bg-gray-300 rounded">
                <svg className="w-10 h-10 text-gray-200 " aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2.5  bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        </div>

    )
}

interface Props {
    number: number,
}

export default function MovieCardSkeleton({number}: Props) {
    const SlideRef: any = useRef();
    const SlideRef1: any = useRef();
    const SlideRef2: any = useRef();
    const SlideRef3: any = useRef();
    return (
        <div className='flex w-full flex-col px-2 py-4 md:pb-12 md:px-12 items-center'>
        <Banner/>
        <div
            className='flex relative w-full border-0 md:border-2 rounded-lg border-primary-grey flex-col px-2 py-4 md:px-12 md:py-20 gap-16'
            id='category'>

            <h1 className='absolute -top-5 z-10 rounded-lg bg-primary px-4 py-2'>Movies</h1>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Genres</h1>
                    <SliderButtons SlideRef={SlideRef}/>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        Array(number).fill(0).map((el, index) =>
                            <div key={index} className='inline-flex col-span-1 justify-center gap-2  md:gap-10'>
                                <MoviesCard/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='trending flex flex-col gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Trending Movies</h1><SliderButtons SlideRef={SlideRef1}/></div>
                <div className='grid grid-cols-4 '>
                    {
                        Array(number).fill(0).map((el,index) =>
                        <div key={index} className='inline-flex col-span-1 justify-center gap-2  md:gap-10'>
                                <MoviesCard/>
                        </div>
                    )
                }
                </div>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Latest Releases</h1><SliderButtons SlideRef={SlideRef2}/></div>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        Array(number).fill(0).map((el, index) =>

                            <div key={index} className='inline-flex col-span-1 justify-center gap-2  md:gap-10'>
                                <MoviesCard/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='latest flex gap-1 justify-between flex-wrap'>
                <div className='w-full inline-flex justify-between items-center'><h1
                    className='font-manrope text-3xl'>Top Rated Movies</h1><SliderButtons SlideRef={SlideRef3}/></div>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        Array(number).fill(0).map((el, index) =>

                            <div key={index} className='inline-flex col-span-1 justify-center gap-2  md:gap-10'>
                                <MoviesCard/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    )
}