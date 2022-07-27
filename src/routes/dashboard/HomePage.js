import { useEffect, useState } from 'react';
import './dashboard.css';

// movies components
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';

// General Components
import Button from '../../components/general/Button';
import axios from 'axios';
import { API_URL } from '../../App';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const loadMovies = (pageQ) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(genres);
    axios
      .get(`${API_URL}/api/titles/advancedsearch`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          maxYear,
          minYear,
          genre: genres.join(','),
          title,
          sort,
          page: pageQ,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovies(data.titles);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, sort, title, page, genres]);

  return (
    <div className="HomePage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <div className="home--cards-movies">
        {movies.map((movieFetch) => (
          <MovieCard key={movieFetch.id} movie={movieFetch} />
        ))}
      </div>
      <Button
        label={'button'}
        className={'btn-dark'}
        onClick={() => {
          loadMovies(page + 1);
          setPage(page + 1);
        }}
      >
        Load More...
      </Button>
    </div>
  );
}

export default HomePage;
