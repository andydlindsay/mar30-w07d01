import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  const { results } = props; 
  return (
    <div className="search-results">
      { results.map(result => {
        return <SearchResult key={result.id} result={result} />;
      }) }
    </div>
  );
};

export default SearchResults;
