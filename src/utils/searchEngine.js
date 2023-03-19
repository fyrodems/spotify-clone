import { useState } from "react";

const SearchEngine = ({ func, spotify }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getUserQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.keyCode !== 13) return;

    spotify.searchTracks(searchQuery).then((response) => {
      //   console.log(response);
      setSearchResults(response);
    });
  };

  func = searchResults;

  return (
    <input
      type="text"
      placeholder="Search for something"
      onChange={getUserQuery}
      onKeyUp={handleSearch}
      //   searchResults={searchResults}
    />
  );
};

// export default searchResults;
export default SearchEngine;
