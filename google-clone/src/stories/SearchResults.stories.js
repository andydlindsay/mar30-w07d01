import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResults from '../SearchResults';
import results from '../data/mock-db';

storiesOf('Search Results', module)
  .add('default render', () => {
    return (
      <SearchResults results={results} />
    );
  })
  .add('filtered results', () => {
    return (
      <SearchResults results={results.filter(result => result.content.includes('sit'))} />
    );
  });
