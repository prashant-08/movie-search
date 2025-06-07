import { useState } from "react";
import "./Navbar.css";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  const navigator = useNavigate()

  function handleAutoCompleteClick(e, movieImdbId) {
    navigator(`/movie/${movieImdbId}`)
  }

  return (
    <div className="navbar-wrapper">
      <div className="movie-base-title"><Link to='/'>Movie Base</Link></div>
      <div className="search-bar">
        <input
          type="text"
          id="movie-search-input"
          placeholder="Enter movie name"
          onFocus={() => {
            setIsAutoCompleteVisible(true);
          }}
          onBlur={() => {
            setIsAutoCompleteVisible(false);
          }}
          onChange={useDebounce((e) => {
            setSearchTerm(e.target.value);
          }, 500)}
        />
        <div
          id="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          <div className="autocomplete-result">
            autocomplete results... {searchTerm}
          </div>
          {movieList.length > 0 &&
            movieList.map((movie) => (
              <div
                key={movie.imdbID}
                onMouseDown={(e) =>
                  handleAutoCompleteClick(e, movie.imdbID)
                }
                className="autocomplete-result"
              >
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div>Theme</div>
    </div>
  );
}

export default Navbar;
