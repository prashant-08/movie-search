import { useEffect, useState } from 'react'
import axios from 'axios'

import {searchMovies} from '../apis/omdb'

import MovieCard from '../components/MovieCard/MovieCard'
import './Home.css'

function Home () {
    const [movieList, setMovieList] = useState([])

        useEffect(()=> {
        const getData = async (...args) => {
            const urls = args.map(name  => searchMovies(name))
            const response = await axios.all(urls.map(url => axios.get(url)))
            console.log(response)
            const movies = response.map(res => res.data.Search);
            setMovieList([].concat(...movies))
        }
        getData('harry', 'avenger', 'batman');
    }, [])

    return (
        <>
        <div className="movie-card-wrapper">
           {movieList.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
        </div>
        </>
    )
}

export default Home