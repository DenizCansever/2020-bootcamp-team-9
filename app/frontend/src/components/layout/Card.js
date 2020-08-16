import React from "react";
import { Link } from "react-router-dom";
import "./../../theme/_cards.scss";

const Card = ({ index, item }) => {
  return (
    <div className="card" id="movie_card">
      <div className="card-inner">
        <div className="card-front">
          <img className="img-fluid" src={item.poster} alt={item.title}></img>
        </div>
        <div className="card-back">
          <Link to={`/movie/${item.id}`}>
            <h1>{item.title}</h1>
          </Link>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
