import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

    return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/" component={MovieList} />
        <Route  path="/movies/:id" component ={Movie} />
      </div>
    </div>
    );
  };

export default App;
