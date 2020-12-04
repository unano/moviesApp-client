import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToCollectionsButton  = ({ movie }) => {
        const context = useContext(MoviesContext);
      
        const handleAddToCollections = e => {
          e.preventDefault();
          context.addToCollections(movie.id);
        };
      
  return (
    <button
      type="button"
      className="btn w-100 btn-info alert-info"
      onClick={handleAddToCollections}>
      Add to Collections
    </button>
  );
};

export default AddToCollectionsButton;