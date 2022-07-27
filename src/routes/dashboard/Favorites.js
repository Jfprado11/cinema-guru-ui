import { useEffect, useState } from 'react';
import './dashboard.css';

// movies components
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';
import { API_URL } from '../../App';

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .get(`${API_URL}/api/titles/favorite/`, {
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
    <div className="FavoritePage">
      <h1>Movies you like</h1>
      <div className="home--cards-movies">
        {movies.map((movieFetch) => (
          <MovieCard key={movieFetch.id} movie={movieFetch} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
