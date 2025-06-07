import { useState , useEffect } from "react";
import { searchMovies } from "../apis/omdb";
import axios from "axios";

function useMovieList (...args) {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      const getData = async (...args) => {
        try {
            const urls = args.map((name) => searchMovies(name));
            const response = await axios.all(urls.map((url) => axios.get(url)));
            if (response[0].data.Error) {
                setMovieList([])
            } else {
                const movies = response.map((res) => res.data.Search);
                setMovieList([].concat(...movies));
            }
        } catch (err) {
            console.log(err.message);
        }
        
      };
      getData(...args);
    }, [...args]);

    return {movieList};
}

export default useMovieList

