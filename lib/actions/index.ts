"use server"

import {scrapmovies} from '../scrapper'
import {connectToDB} from "@/lib/mongoose";
import Movie from "@/lib/Models/movie.model";

export async function scrapMoviesandStore(url:string,type:string) {
     if(!url) return;
     try{
         connectToDB();
         const movies =  await scrapmovies(url,type);
         if(!movies) return;
         const options = { ordered: true };
         const res = Movie.insertMany(movies,options);
     }catch(err:any){
         throw new Error("Failed To get Data cause :"+err.message);
     }
}

export async function scrapbygenre(genre:string){
    const url = `https://goku.watch/genre/${genre}`;
    if(!url) return;
    try{
        connectToDB();
        const movies =  await scrapmovies(url,genre);
        if(!movies) return;
        const options = { ordered: true };
        const res = Movie.insertMany(movies,options);
        console.log(movies)
    }catch(err:any){
        throw new Error("Failed To get Data cause :"+err.message);
    }
}
export async function getTrending(){
    try {
        connectToDB();
        const trending = await Movie.find({type:'trending'});

        if(!trending){
            console.log('Cant get trending movies');
            return;
        }
        return JSON.stringify(trending);

    }catch (error:any){
        throw new Error("Failed To get Data cause :"+error.message);
    }
}
export async function getLatest(){
    try {
        connectToDB();
        const latest = await Movie.find({type:'latest'});

        if(!latest){
            console.log('Cant get latest movies');
            return;
        }
        return JSON.stringify(latest);

    }catch (error:any){
        throw new Error("Failed To get Data cause :"+error.message);
    }
}

export async function getAllMovies(){
    try {
        connectToDB();
        const movies = await Movie.find();

        if(!movies){
            console.log('Cant get latest movies');
            return;
        }
        return JSON.stringify(movies);

    }catch (error:any){
        throw new Error("Failed To get Data cause :"+error.message);
    }
}

export async function getMovie(id:string){
    try{
        connectToDB();
        const movie = await Movie.find({_id : id})
        if(!movie){
            return;
        }
        return JSON.stringify(movie);
    }
    catch (error:any){
        throw new Error("Failed To get Data cause :"+error.message);
    }
}