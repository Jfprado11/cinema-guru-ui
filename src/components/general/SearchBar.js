import './general.css';

function SearchBar({ title, setTitle }) {
  const hendleInput = (onChange) => {
    setTitle(onChange.target.value);
  };

  return <input className="searchBar" type="text" onChange={hendleInput} placeholder="Search Movies" />;
}

export default SearchBar;
