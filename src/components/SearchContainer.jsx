import React, { useState } from 'react';
import useFetchData from '../hooks/useFetch';

/*
style
*/
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/*
component
*/
import Result from './Result';

const FREE_WORD = 'フリーワード';
const ERROR_FREE_WORD = 'フリーワードを入力してください。';

const SearchContainer = () => {
  const { error, setError, fetching, result, handleSubmit } = useFetchData();
  const [value, setValue] = useState({
    freeWord: '',
  });

  const handleFreeWord = (e) => {
    setError({
      freeWord: false,
    });
    setValue({ [e.target.name]: e.target.value });
  };

  return (
    <>
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
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        {fetching ? (
          <Box m={10}>
            <CircularProgress />
          </Box>
        ) : (
          <Result result={result} />
        )}
      </Grid>
    </>
  );
};
export default SearchContainer;
