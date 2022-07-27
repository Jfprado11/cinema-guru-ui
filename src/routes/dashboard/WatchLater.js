import { useEffect, useState } from 'react';
import './dashboard.css';

// movies components
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';
import { API_URL } from '../../App';

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .get(`${API_URL}/api/titles/watchlater/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => setMovies(data))
      .catch((err) => console.log(err, 'favorite'));
  }, []);

  return (
    <div className="watchlaterPage">
      <h1>Movies To Watch later</h1>
      <div className="home--cards-movies">
        {movies.map((movieFetch) => (
          <MovieCard key={movieFetch.id} movie={movieFetch} />
        ))}
      </div>
    </div>
  );
}

export default WatchLater;
