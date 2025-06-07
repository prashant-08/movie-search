import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { searchMoviesById } from "../apis/omdb"
import axios from "axios"
import MovieCard from "../components/MovieCard/MovieCard"


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
        <>
        {movie && <MovieCard {...movie} />}
        </>
    )
}

export default MovieDetails