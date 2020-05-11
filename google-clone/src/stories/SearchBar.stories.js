import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from '../SearchBar';

storiesOf('Search Bar', module)
  .add('default render', () => {
    return <SearchBar setSearchTerm={action('search button clicked')} />;
  });
