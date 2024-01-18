'use client'
import BannerSlider from "@/components/Slider/BannerSlider";
import {useAppSelector} from "@/lib/hooks";
import MoviePage from "@/components/MovieComponents/MoviePage";

export default  function Page() {
  const {trending,latest,movies} = useAppSelector((state:any) => state.movie ) || [];
  console.log(latest)
  return (
    <div className='flex w-full flex-col pb-12 px-12 items-center'>
      <BannerSlider/>
       <MoviePage trending={trending} latest={latest}/>
    </div>
  )
}
