/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    // eslint-disable-next-line react/prop-types
    props.onSearch(term);
  // eslint-disable-next-line react/prop-types
  }, [props.onSearch, term]);

  return (
    <div className="searchbar">
      <label htmlFor="searchbar">
        Search:
        <input type="text" id="searchbar" size="40" name="searchbar" placeholder="Search for your music..." onChange={handleTermChange} />
        <button className="SearchButton" type="submit" onClick={search}>Search</button>
      </label>
    </div>
  );
}

export default SearchBar;
