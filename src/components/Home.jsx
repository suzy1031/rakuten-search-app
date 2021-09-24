import React, { useState } from 'react';
import useFetchData from '../hooks/useFetch';

/*
style
*/
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

/*
component
*/
import Result from './Result';
import ItemSearch from './ItemSearch';

const Home = () => {
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
      <ItemSearch
        value={value}
        error={error}
        handleFreeWord={handleFreeWord}
        handleSubmit={handleSubmit}
      />
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
export default Home;
