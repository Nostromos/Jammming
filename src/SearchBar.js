import React from 'react';

function SearchBar() {
  return (
    <div className="search">
      <label htmlFor="searchbar">
        Search:
        <input type="text" id="searchbar" />
      </label>
    </div>
  );
}

export default SearchBar;
