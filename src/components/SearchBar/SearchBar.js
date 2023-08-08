/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    event.preventDefault();
    setTerm(event.target.value);
  });

  return (
    <div className="searchbar">
      <label htmlFor="searchbar">
        Search:
        <input type="text" id="searchbar" size="40" name="searchbar" placeholder="Search for your music..." onChange={handleTermChange} />
        <button className="SearchButton" type="submit">Search</button>
      </label>
    </div>
  );
}

export default SearchBar;
