import React from "react";
import { Link } from "react-router-dom";
// import SavedList from "./MovieList";
// import Home from "./Home";

<div className="saved-list">
<h3>Saved Movies:</h3>
{props.list.map(movie => (
  <span className="saved-movie">{movie.title}</span>
))}
<Link to = "/" >
<div className="home-button">Home</div>
</Link>
</div>
;

export default SavedList;
