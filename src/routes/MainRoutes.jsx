import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import MovieDetails from '../pages/MovieDetails'

function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )

}

export default MainRoutes