import React, { useState, useEffect } from "react";
import { getWatchedMoviesByUser } from "../../service";
import SectionProfile from "../../components/layout/SectionProfile";
import WatchListCard from "../../components/layout/WatchListCard";
import Spinner from "../../components/layout/Spinner";
import "../../theme/_cards.scss";


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState([]);

  console.log("izlenenler", watchedMovies);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setWatchedMovies(await getWatchedMoviesByUser());
      setIsLoading(false);
    };

    fetchAPI();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <SectionProfile /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="float-right">
              <i className="far fa-arrow-alt-circle-right"></i>
            </div>
          </div>
        </div>
        <div className="row">
          {watchedMovies.map((movie, index) => (
            <WatchListCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
