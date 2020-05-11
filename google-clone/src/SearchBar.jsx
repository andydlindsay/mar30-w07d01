import React from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = React.useState('');
  const { setSearchTerm } = props;

  return (
    <div className="search-bar">
      <input 
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <button type="button" onClick={() => setSearchTerm(term)}>Search!</button>
    </div>
  );
};

export default SearchBar;
