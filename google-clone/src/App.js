import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import results from './data/mock-db';

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="App">
      <h1>React is Awesome!</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SearchResults results={results.filter(result => result.content.includes(searchTerm))}/>
    </div>
  );
};

export default App;
