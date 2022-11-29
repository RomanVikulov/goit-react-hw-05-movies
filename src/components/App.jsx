import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar/AppBar';


const HomePage = lazy(() =>
  import('../views/HomePage/HomePage')
);
const MoviesPage = lazy(() =>
  import('../views/Movies/MoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
