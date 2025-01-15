import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  actors: { type: [String], required: true },
  director: { type: String, required: true },
  genre: { type: [String], required: true },
  rating: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  poster: { type: String, required: true },
});

const Film = mongoose.model("Film", filmSchema, "films");

export default Film;
