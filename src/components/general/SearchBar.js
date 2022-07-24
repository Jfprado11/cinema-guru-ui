import './general.css';

function SearchBar({ title, setTitle }) {
  const hendleInput = (onChange) => {
    setTitle(onChange.target.value);
  };

  return <input type="text" onChange={hendleInput} />;
}

export default SearchBar;
