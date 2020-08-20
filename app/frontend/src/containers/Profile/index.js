import React, { useState, useEffect } from "react";
import { getWatchedMovies, getWatchMovies } from "../../service";
import SectionProfile from "../../components/layout/SectionProfile";
import ListCard from "../../components/layout/ListCard";
import Spinner from "../../components/layout/Spinner";
import "../../theme/_cards.scss";

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
    <>
       <SectionProfile /> 
      <h4>İzlediklerim</h4>
      {watchedMovies.map((movie, index) => (
        <ListCard movie={movie} key={index} />
      ))}

      <h4>İzleyeceklerim</h4>
      {watchMovies.map((movie, index) => (
        <ListCard movie={movie} key={index} />
      ))}
    </>
  );
};

export default Profile;
