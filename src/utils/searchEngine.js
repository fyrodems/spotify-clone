import { useState } from "react";

const SearchEngine = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getUserQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchFunction = (e) => {
    if (e.keyCode !== 13) return;

    props.spotify.searchTracks(searchQuery).then((response) => {
      // console.log(response);
      setSearchResults(response);
      // console.log(searchResults);
    });
  };

  return (
    <input
      type="text"
      placeholder="Search for something"
      onChange={getUserQuery}
      onKeyUp={props.handleSearch(handleSearchFunction)}
      //   searchResults={searchResults}
    />
  );
};

// export default searchResults;
export default SearchEngine;
