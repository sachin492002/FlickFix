'use client'
import BannerSlider from "@/components/Slider/BannerSlider";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import MoviePage from "@/components/MovieComponents/MoviePage";


export default  function Page() {
    const dispatch = useAppDispatch();
  const {trending,now_playing} = useAppSelector((state:any) => state.movie ) || [];



   console.log(trending);

  return (
    <div className='flex w-full flex-col pb-12 px-12 items-center'>
      <BannerSlider/>
       <MoviePage trending={trending} latest={now_playing}/>
    </div>
  )
}
