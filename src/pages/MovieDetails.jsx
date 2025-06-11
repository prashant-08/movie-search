import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { searchMoviesById } from "../apis/omdb"
import axios from "axios"
import MovieCard from "../components/MovieCard/MovieCard"

import './MovieDetails.css'


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
            {movie && <div className="movie-detils">
                <div>
                    Plot: {movie.Plot}
                </div>
                <div>
                    Actors: {movie.Actors}
                </div>
                <div>
                    Genre: {movie.Genre}
                </div>
            </div>}
        </div>
    )
}

export default MovieDetails