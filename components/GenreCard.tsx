import {FaArrowRight} from "react-icons/fa";


export default function GenreCard({genre}){
    return(
            <div className='category-card border-2 flex flex-col gap-2 border-primary-grey bg-red-700 rounded-lg p-4'>
                <img src={genre.imgsrc} alt='no'/>
                <div className='inline-flex justify-between text-md  items-center '>
                    <h1 className='capitalize'>{genre.name}</h1>
                    <FaArrowRight/>
                </div>
            </div>
    )
}