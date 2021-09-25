import React from 'react';
import Home from './Home';

import ItemSearch from './ItemSearch.stories';
import Result from './Result.stories';

export default {
  component: Home,
  title: 'Home',
};

export const Template = () => (
  <Home>
    <ItemSearch />
    <Result />
  </Home>
);
