export type Movie = {
    _id?: string;
    name: String,
    gokuUrl: String,
    thumbnail: string ,
    rating: String ,
    duration: String,
    streamlinks: [],
    description: String,
    genres: [],
    cast: [],
    production: [],
    country: [],
    year: Number ,
    type:String,
}

export type Genre = {
    name :string,
    imgsrc : string,
}