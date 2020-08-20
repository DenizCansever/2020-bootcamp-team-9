import React from "react";
import { Link } from "react-router-dom";
import "./../../theme/_cards.scss";

const Card = ({ item }) => {
  return (
    <div className="card" id="movie_card">
      <div className="card-inner">
        <div className="card-front">
          <img className="img-fluid" src={item.moviePosterImage==="" ? "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2012/11/movie_theater_interior_a_l.jpg" :item.moviePosterImage} alt={item.title}></img>
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
