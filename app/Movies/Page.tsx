'use client'
import BannerSlider from "@/components/Slider/BannerSlider";
import {useAppSelector} from "@/lib/hooks";
import MoviePage from "@/components/MovieComponents/MoviePage";

export default  function Page() {
  const {trending,latest,movies} = useAppSelector(state=> state.movie ) || [];

  return (
    <div className='flex w-full flex-col h-full items-center'>
      <BannerSlider/>
       <MoviePage/>
    </div>
  )
}
