// library imports
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// css imports
import "./Navbar.css";

// component import
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from "../../context/ThemeContext";

function Navbar() {
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm);
  const navigator = useNavigate()

  const {theme, setTheme} = useContext(ThemeContext)

  function updateTheme() {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('app-theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('app-theme', 'dark')
    }
  }
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
      <div onClick={updateTheme}>

        <FontAwesomeIcon className="theme-icon" icon={(theme === 'dark') ? faSun : faMoon} />
      </div>
    </div>
  );
}

export default Navbar;
