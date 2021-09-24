import React from 'react';
import PropTypes from 'prop-types';

/*
style
*/
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FREE_WORD = 'フリーワード';
const ERROR_FREE_WORD = 'フリーワードを入力してください。';

const ItemSearch = ({ value, error, handleFreeWord, handleSubmit }) => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='freeWord'
        label={FREE_WORD}
        variant='outlined'
        name='freeWord'
        value={value.freeWord}
        onChange={handleFreeWord}
        error={error.freeWord && true}
        helperText={error.freeWord && ERROR_FREE_WORD}
      />
      <br></br>
      <Button variant='outlined' onClick={() => handleSubmit(value)}>
        Submit
      </Button>
    </Box>
  );
};
export default ItemSearch;

ItemSearch.propTypes = {
  value: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  handleFreeWord: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

ItemSearch.defaultProps = {
  value: {},
  error: {},
};
