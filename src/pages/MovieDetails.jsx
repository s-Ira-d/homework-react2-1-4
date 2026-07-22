import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/api';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : 'N/A';

  const userScore = Math.round(movie.vote_average * 10);

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <div className="movie-info">
        <img className="movie-poster" src={posterUrl} alt={movie.title} />

        <div className="movie-description">
          <h1>
            {movie.title} ({releaseYear})
          </h1>

          <p>User Score: {userScore}%</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <hr />

      <h3>Additional information</h3>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
};

export default MovieDetails;
