import React from "react";
import SimilarMovieCard from "../similarMovieCard/";
import "./similarMovieList.css"
const SimilarMovieList = ({movies}) => {
  return <>
    {movies ? (
  <div className="movies3">
    {movies.map(m => (<SimilarMovieCard key={m.id} movie={m} />))}
  </div>):(<p>No similar movie</p>)
    }</>
};

export default SimilarMovieList;