import MovieCard from "../components/MovieCard/MovieCard"
import './Home.css'

function Home () {
    const movie = {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "imdbID": "tt1201607",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"
    }

    return (
        <>
        <div className="movie-card-wrapper">
            <MovieCard {...movie} />
            <MovieCard {...movie} />
            <MovieCard {...movie} />
            <MovieCard {...movie} />
        </div>
        </>
    )
}

export default Home