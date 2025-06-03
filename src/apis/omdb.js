export function searchMovies(term) {
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${term}`;
}