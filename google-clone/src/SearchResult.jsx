import React from 'react';

const SearchResult = (props) => {
  const { result } = props;
  const { title, content, website } = result;
  return (
    <div className="search-result">
      <h1>{title}</h1>
      <p>{content}</p>
      <a href={website}>{website}</a>
    </div>
  );
};

export default SearchResult;
