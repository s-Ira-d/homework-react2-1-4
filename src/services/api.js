import axios from 'axios';

const API_KEY = '40cce7cf1c638f66d99f6d334130a331';

export const getMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}?api_key=${API_KEY}`);

  return response.data;
};

export const searchMovies = async query => {
  const response = await api.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

export const getMovieCredits = async movieId => {
  const response = await api.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await api.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return response.data.results;
};

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getTrendingMovies = async () => {
  const response = await api.get(`/trending/movie/day?api_key=${API_KEY}`);

  return response.data.results;
};
