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
      className="btn w-100 btn-primary"
      onClick={handleAddToCollections}>
      Add to Collections
    </button>
  );
};

export default AddToCollectionsButton;