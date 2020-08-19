import React, { useState, useRef } from "react";
// import { fetchPopularMovies } from "../../service";
import { Form } from "react-bootstrap";

function Search ({handleInput, search}) {

  return (
    <div id="demo-2">
        <input
          type="search"
          className="form-control expanding-search mr-sm-2"
          aria-label="Search"
          onChange={handleInput}
          onKeyPress={search}
        />
    </div>
  );
};

export default Search;
