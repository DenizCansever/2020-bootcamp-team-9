import React from "react";
import { Link } from "react-router-dom";
import "./../../theme/_cards.scss";

const Card = ({ item, index }) => {
  return (
    <div className="card" id="movie_card">
      <div className="card-inner">
        <div className="card-front">
          <img className="img-fluid" src={item.moviePosterImage} alt={item.title}></img>
        </div>
        <div className="card-back">
          <Link to={`/movie/${item.ids.trakt}`}>
            <h1>{item.title}</h1>
          </Link>
          <ul>
            <li>
              <strong>Title:</strong> {item.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
