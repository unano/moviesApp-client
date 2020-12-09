import React, { useContext, useState, useEffect } from "react";
import { getPopularPeople, getMovies} from "../api/tmdb-api";
import PersonList from "../components/personList"


const PopularPeoplePage = () => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        getPopularPeople().then(person => {
            setPerson(person);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    let displayedPerson = person
    // .filter(m => {
    //   return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    // })

    return (
        <>
        <div className="title">Popular person</div>
          <PersonList
           person={displayedPerson}
        />
        </>
    )
}

export default PopularPeoplePage;