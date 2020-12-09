import React from "react";
import PersonMovieCard from "../personMovieCard";
import "./movieList.css";

const PersonMovieList = ({movies}) => {
  console.log(movies)
  // const movieCards = movies.map(m => (
  //   <PersonMovieCard key={m.id} movie={m} />
  // ));
  return <>
  {movies ? (
    <><div className="row movies">{movies.map(m => (
      <PersonMovieCard key={m.id} movie={m} />
    ))};</div>;</>
    ): (
      <p>Waiting for movie details</p>
    )}
  </>
};

export default PersonMovieList;
