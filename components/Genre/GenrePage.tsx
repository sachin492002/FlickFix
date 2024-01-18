import {Movie} from "@/types";
import MovieCard from "@/components/MovieComponents/MovieCard";

interface Props{
    movies : [Movie],
    genre: string,
}
export default function GenrePage({movies,genre}:Props){
    return(
        <div className='mt-44 px-12  flex flex-col '>
            <div className='relative border-2 border-primary-grey px-12 py-12 rounded-lg'>
                <h1 className='absolute -top-5 z-10 bg-primary text-4xl font-bitter capitalize px-4 py-2 rounded-lg'>{genre}</h1>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        movies?.map((movie) => {

                            return<>
                                <div className='col-span-1'>
                            <MovieCard movie={movie} key={movie._id}/>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    )
}