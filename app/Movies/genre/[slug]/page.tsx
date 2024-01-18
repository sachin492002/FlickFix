'use client'

import GenrePage from "@/components/Genre/GenrePage";
import {useAppSelector} from "@/lib/hooks";
import {Movie} from "@/types";


export default function Page({ params }: { params: { slug: string } }){
    const genre:string = (params.slug).charAt(0).toUpperCase() + (params.slug).slice(1);
    const {movies} = useAppSelector((state:any)=>state.movie) || [];
    function findMoviesByGenre(movies : [Movie], genre:string) {
        // @ts-ignore
        return movies.filter(movie => movie.genres.includes(genre));
    }
    const GenreMovies = findMoviesByGenre(movies,genre)
    console.log(GenreMovies);
    // @ts-ignore
    return <GenrePage movies={GenreMovies} genre={params.slug}/>
}