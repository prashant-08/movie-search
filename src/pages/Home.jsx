import MovieCard from '../components/MovieCard/MovieCard'
import './Home.css'
import useMovieList from '../hooks/useMovieList'

function Home () {
    const {movieList} = useMovieList("harry", "avenger", "batman")
    return (
        <>
        <div className="movie-card-wrapper">
           {movieList.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
        </div>
        </>
    )
}

export default Home