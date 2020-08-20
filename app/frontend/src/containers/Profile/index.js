import React, { useState, useEffect } from "react";
import { getWatchedMovies, getWatchMovies } from "../../service";
import SectionProfile from "../../components/layout/SectionProfile";
import Card from "../../components/layout/Card";
import Spinner from "../../components/layout/Spinner";
import "../../theme/_cards.scss";
import { Row } from "react-bootstrap"

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [watchMovies, setWatchMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setWatchedMovies(await getWatchedMovies());
      setWatchMovies(await getWatchMovies());
      setIsLoading(false);
    };

    fetchAPI();
  }, []);

  getWatchedMovies().then((response) => {
    console.log(response);
  });

  return isLoading ? (
    <Spinner />
  ) : (
      <div>
        <SectionProfile />
        {/* <h4>İzlediklerim</h4>
      {watchedMovies.map((movie, index) => (
        <ListCard movie={movie} key={index} />
      ))}

      <h4>İzleyeceklerim</h4>
      {watchMovies.map((movie, index) => (
        <ListCard movie={movie} key={index} />
      ))} */}
        <p></p>

        <div className="row">
          <div className="col-md-12">
            <h4 >My Watched List</h4>
            <section className="cards">
              {watchedMovies.map((movie, index) => (
                <Card item={movie} key={index} />
              ))}
            </section>
          </div>
        </div>
        <p></p>

        <div className="row">
          <div className="col-md-12">
            <h4 >My Watchlist</h4>
            <section className="cards">
              {watchMovies.map((movie, index) => (
                <Card item={movie} key={index} />
              ))}
            </section>
          </div>
        </div>
      </div>

    );
};

export default Profile;
