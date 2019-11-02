import React from 'react';

import { Route, Link } from "react-router-dom";
// function Home(props) {  
//     props.history.push("/")
// }

const SavedList = props => (
  

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to={'/'} className="home-button">Home</Link>
  </div>
);


export default SavedList;
