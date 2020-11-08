import React from "react";
import { Link } from "react-router-dom";

const AddToWatchListButton  = () => {
  return (
    <Link
      type="button"
      className="btn w-100 btn-primary">
      Add to watch list
    </Link>
  );
};

export default AddToWatchListButton;