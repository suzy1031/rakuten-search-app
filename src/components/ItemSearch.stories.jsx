import React from 'react';
import { action } from '@storybook/addon-actions';
import ItemSearch from './ItemSearch';

export default {
  component: ItemSearch,
  title: 'ItemSearch',
};

const Template = (args) => <ItemSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: {
    freeWord: '',
  },
  error: {
    freeWord: false,
  },
  handleFreeWord: action('handleFreeWord'),
  handleSubmit: action('handleSubmit'),
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: {
    freeWord: true,
  },
};
