import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  );
};

export default MovieDetails;
