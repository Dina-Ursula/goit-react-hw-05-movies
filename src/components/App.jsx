import { Routes, Route, NavLink } from 'react-router-dom';
// import styled from 'styled-components';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Revievs from '../pages/Revievs';

export const App = () => {
  // b32001baa4069f0370377782fb699772;

  //api.themoviedb.org/3/movie/550?api_key=b32001baa4069f0370377782fb699772
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Revievs />} />
        </Route>
      </Routes>
    </div>
  );
};
