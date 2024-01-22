'use client'
import BannerSlider from "@/components/Slider/BannerSlider";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import MoviePage from "@/components/MovieComponents/MoviePage";


export default  function Page() {
    const dispatch = useAppDispatch();
  const {trending,now_playing} = useAppSelector((state:any) => state.movie ) || [];

  return (
    <div className='flex w-full flex-col px-2 py-4 md:pb-12 md:px-12 items-center'>
      <BannerSlider/>
       <MoviePage trending={trending} latest={now_playing}/>
    </div>
  )
}
