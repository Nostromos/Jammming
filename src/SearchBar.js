import React from 'react';

function SearchBar() {
  return (
    <div className="search">
      <form>
        <label htmlFor="searchbar">
          Search:
          <input type="text" id="searchbar" size="40" name="searchbar" placeholder="Search for your music..." />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
