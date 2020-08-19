import React from "react";
import { Link } from "react-router-dom";


const WatchListCard = ({ index, item }) => {
    if (item != null && item.length > 0) {
        return (
            <div>
                <div>
                    <h1>Your Watched</h1>
                </div>
                <div className="card" id="movie_card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img className="img-fluid" src={item.moviePosterImage} alt={item.title}></img>
                        </div>
                        <div className="card-back">
                            <Link to={`/movie/${item.id}`}>
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
            </div>
        ); 
    }
    else {
        return <div> <h1>Empty</h1> </div>
    }
  
};

export default WatchListCard;
