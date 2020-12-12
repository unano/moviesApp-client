import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import SimilarMovieCard from "../src/components/similarMovieCard";
import SimilarMovieList from "../src/components/similarMovieList";
import MovieReview from  "../src/components/movieReview"
import MovieReviews from  "../src/components/movieReviews"
import PersonList from "../src/components/personList"
import PersonCard from "../src/components/personCard"
import PersonDetails from "../src/components/personDetails"
import PersonMovieList from "../src/components/personMovieList"
import PersonMovieCard from "../src/components/personMovieCard"
import PersonMovieListAll from "../src/components/personMovieListAll"
import PersonalInfo from "../src/components/personalInfo";
import PersonalInfoEdit from "../src/components/personalInfoEdit";
import RegistWindow from "../src/components/registWindow"
import LoginWindow from "../src/components/loginWindow"

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const person={
  adult: false,
  gender: 2,
  id: 6384,
  known_for: [{title: "The Matrix"}, {title: "John Wick"}, {title: "John Wick: Chapter 2"}],
  known_for_department: "Acting",
  name: "Keanu Reeves",
  popularity: 30.707,
  profile_path: "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg",
}

const personDetail={
  adult: false,
  also_known_as: ["Киану Ривз", "키아누 리브스", "キアヌ・リーブス", "เคอานู รีฟส์", "基努·里维斯", "קיאנו ריבס", "Keanu Charles Reeves", "Κιάνου Ριβς", "Κιάνου Τσαρλς Ριβς", "Кіану Рівз", "كاينو ريفز", "كيانو ريفز"],
  biography: "Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and The Matrix trilogy as Neo. He has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he 'displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.' A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.696969",
  birthday: "1964-09-02",
  deathday: null,
  gender: 2,
  homepage: null,
  id: 6384,
  imdb_id: "nm0000206",
  known_for_department: "Acting",
  name: "Keanu Reeves",
  place_of_birth: "Beirut, Lebanon",
  popularity: 30.707,
  profile_path: "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg"
}

const review ={
  author: "SWITCH.",
  author_details: {name: "SWITCH.", username: "maketheSWITCH", avatar_path: "/klZ9hebmc8biG1RC4WmzNFnciJN.jpg", rating: 4},
  content: "Eshom and Ian Nelms' offbeat ambition makes them people to keep an eye on, but their plodding execution still needs some work.  'Fatman' could have been the 'Unforgiven' of Christmas cinema, unfortunately, it feels like the product of a pair of busy but unfocused imaginations.",
  created_at: "2020-11-15T11:01:31.772Z",
  id: "5fb10a8b498ef90040833c9d",
  updated_at: "2020-11-21T19:29:53.938Z",
  url: "https://www.themoviedb.org/review/5fb10a8b498ef90040833c9d"
}

const userInfo={
  username:"userA",
  gender:"male",
  birthday:"2000-01-01",
  hobby:"hobby1",
  movies:"movies1",
  actors:"actors1",
  introduce:"introduce1",
}

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <AddFavoriteButton />}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <AddFavoriteButton/>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movies => (
          <AddFavoriteButton/>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

storiesOf("Movie Details Page/SimilarMovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return(
    <SimilarMovieList movies={movies}/>
    )
});

storiesOf("Movie Details Page/SimilarMovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () =>  <SimilarMovieCard  movie={sample} />)
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <SimilarMovieCard  movie={sampleNoPoster}/>
    );
  });

storiesOf("Movie Details Page/MovieReviews", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () =>  <MovieReviews movie={sample} />);

storiesOf("Movie Details Page/MovieReview", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () =>  <MovieReview review={review} />);

storiesOf("Popular people Page/PersonCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonCard person={person} />)

storiesOf("Popular people Page/PersonList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const people = [person, person, person, person, person];
    return (
      <PersonList person={people}/>
    );
  });

storiesOf("People Details Page/PersonDetails", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <PersonDetails person={personDetail} movies={movies}/>
    );
  });

storiesOf("People Details Page/PersonMovielist", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <PersonMovieList movies={movies}/>
    );
  });
  
storiesOf("People Details Page/PersonMovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => 
      <PersonMovieCard movie={sample} property={sample.popularity}  property2="popularity:"/>)
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <PersonMovieCard  movie={sampleNoPoster}/>
    );
  });
  
storiesOf("People Details Page/PersonMovieListAll", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonMovieListAll movie={sample} />);

storiesOf("People Details Page/PersonMovieListAll", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonMovieListAll movie={sample} />);

storiesOf("PersonalInfoPage", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonalInfo  user={userInfo}/>);

storiesOf("PersonalInfoEditPage", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonalInfoEdit  userInfo={userInfo}/>);

storiesOf("Regist page", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <RegistWindow/>);

storiesOf("Login page", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <LoginWindow/>);