'use client'


import ReactPlayer from "react-player";

export default function Page({ params }: { params: { slug: string } }){
    const movie_id = params.slug;

    return(
        <div className='flex w-full justify-center items-center mt-44'>
            <ReactPlayer url={'https://youtu.be/d9MyW72ELq0?si=_LJdsba1xYTeiS8P'} controls={true} width={1024} height={720}/>
        </div>
    )
}