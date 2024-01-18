import {FaArrowRight} from "react-icons/fa";


export default function MovieCard(){
    return(
        <div className='category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
            <img src={genre.imgsrc} alt='no'/>
            <div className='inline-flex justify-between text-md  items-center '>
                <h1 className='capitalize'>{genre.name}</h1>
                <FaArrowRight/>
            </div>
        </div>
    )
}