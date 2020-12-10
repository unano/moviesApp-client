import React from "react";
import Movie from "../similarMovieCard/";
import "./similarMovieList.css"
const MovieList = ({movies}) => {
  console.log(movies)
  return <>
    {movies ? (
  <div className="movies3">
    {movies.map(m => (<Movie key={m.id} movie={m} />))}
  </div>):(<p>No similar movie</p>)
    }</>
};

export default MovieList;