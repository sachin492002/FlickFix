import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema({
    name: { type: String},
    gokuUrl: { type: String},
    thumbnail: { type: String },
    rating: { type: String },
    duration: { type: String},
    streamlinks: [{ type: String}],
    description: { type: String},
    genres: [{ type: String }],
    cast: [{ type: String }],
    production: [{ type: String }],
    country: [{ type: String }],
    year: { type: Number },
    type:{type:String},
    default: [],
}, { timestamps: true });

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;