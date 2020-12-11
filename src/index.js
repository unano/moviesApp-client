import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage';       // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';  
import TopRatedMoviesPage from './pages/topRatedMoviesPage'; 
import WatchListPage from './pages/watchListPage'; 
import CollectionPage from './pages/collectionPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PersonalContextProvider from "./contexts/personalContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from './pages/loginWindow';
import RegistPage from './pages/registWindow';
import LoginContextProvider from './contexts/loginContext' 
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PopularPeoplePage from './pages/popularPeoplePage';
import PersonalInfoPage from './pages/personalInfoPage';
import PersonalInfoEditPage from './pages/personalInfoEditPage';

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron bg-white">
    <LoginContextProvider>
      <SiteHeader /> 
      <div className="container-fluid">
      <MoviesContextProvider>     {/* NEW  */}
      <GenresContextProvider>    {/* NEW */}
      <PersonalContextProvider>
        <Switch>
          <Route exact path="/person" component={PopularPeoplePage} />
          <Route path="/person/:id" component={PeopleDetailsPage} />
          <Route exact path="/info" component={PersonalInfoPage} />
          <Route exact path="/editInfo" component={PersonalInfoEditPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} /> 
          <Route exact path="/movies/topRated" component={TopRatedMoviesPage} /> 
          <Route exact path="/movies/watchList" component={WatchListPage} />
          <Route exact path="/movies/collection" component={CollectionPage} />
          <Route exact path="/movies/login" component={LoginPage} />
          <Route exact path="/movies/regist" component={RegistPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          
        </Switch>
        </PersonalContextProvider>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
      </LoginContextProvider>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));