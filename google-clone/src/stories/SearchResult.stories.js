import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResult from '../SearchResult';

const result = {
  id: 1,
  website: 'http://www.example.com',
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices sagittis justo et faucibus. Sed volutpat tempus lectus vel laoreet. Proin et lectus et nisl posuere mollis vitae sed felis.'
};

storiesOf('Search Result', module)
  .add('default render', () => {
    return (<SearchResult result={result} />);
  });
