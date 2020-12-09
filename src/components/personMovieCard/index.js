import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";

const PersonMovieCard = ({movie}) => {
  return (
    <div className="">
      <div className="personMovie">
      <div className="personMovieCard">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
      <p>{movie.title}</p>
      </div>
      </div>
    </div>
  );
};

export default PersonMovieCard;