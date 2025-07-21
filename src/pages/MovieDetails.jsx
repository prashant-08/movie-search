import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { searchMoviesById } from "../apis/omdb"
import axios from "axios"
import MovieCard from "../components/MovieCard/MovieCard"
import { Rating } from '@smastrom/react-rating'


import './MovieDetails.css'
import '@smastrom/react-rating/style.css'

function MovieDetails () {
    const [movie, setMovie] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(searchMoviesById(id))
            setMovie(response.data)
        }
        getData()
    }, [id])
    return (
        <div className="movie-details-wrapper">
            {movie && <MovieCard {...movie} />}
            {movie && <div className="movie-details">
                <div>
                    Plot: {movie.Plot}
                </div>
                <div>
                    Actors: {movie.Actors}
                </div>
                <div>
                    <span>Genre:</span> {movie.Genre.split(',').map((genre) => {
                        return <span className="genre" key={genre}>{genre}</span>
                    })}
                </div>
                <div>
                    <Rating value={Math.floor(movie.imdbRating)} items={10} />
                </div>
            </div>}
        </div>
    )
}

export default MovieDetails