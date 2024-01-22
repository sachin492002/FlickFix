export type Movie = {
    adult : boolean,
    genre_path : string,
    genre_ids : [],
    id : string,
    media_type : string,
    original_language :string,
    original_title:string,
    overview:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string
    video: boolean,
    vote_average:number,
    vote_count:number,
}

export type Genre = {
    id :number,
    name : string,
    imgsrc : string,
}

