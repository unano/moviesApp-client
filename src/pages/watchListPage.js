import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToWatchListButton from '../components/buttons/addToWatchList'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watchList )
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"WatchList Movies"}
      action={movie => <AddToWatchListButton movie={movie} />}
    />
  );
};

export default WatchListPage;