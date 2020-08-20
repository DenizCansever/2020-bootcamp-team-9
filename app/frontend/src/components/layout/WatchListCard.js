import React from "react";
import { Link } from "react-router-dom";
import "../../theme/_cards.scss";

const WatchListCard = ({ movie }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card">
        <Link to={`/movie/${movie.ids.trakt}`}>
          <img className="img-fluid" src={movie.moviePosterImage} alt={movie.title} />
        </Link>
      </div>
    </div>
  );
};

export default WatchListCard;
