import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json';

const SearchContainer = () => {
  const [value, setValue] = useState({
    freeWord: '',
  });
  const [error, setError] = useState({
    freeWord: false,
  });
  const [fetching, setFetching] = useState(false);

  const handleFreeWord = (e) => {
    setError({
      freeWord: false,
    });
    setValue({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const params = value.freeWord;

    if (params) {
      setFetching(true);

      const encodedParams = encodeFreeWord(params);
      axios
        .get(
          `${BASE_URL}&keyword=${encodedParams}&applicationId=${process.env.REACT_APP_APPLICATION_ID}`
        )
        .then((response) => {
          console.log(response.data);
          setFetching(false);
        })
        .catch((error) => {
          console.log(error);
          setFetching(false);
        });
    } else {
      console.log('検索条件を入力してください。');
      setError({
        freeWord: true,
      });
      setFetching(false);
    }
  };

  const encodeFreeWord = (params) => {
    var urlEncode = require('urlencode');
    return urlEncode(params);
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
          label='フリーワード'
          variant='outlined'
          name='freeWord'
          value={value.freeWord}
          onChange={handleFreeWord}
          error={error.freeWord && true}
          helperText={error.freeWord && 'フリーワードを入力してください。'}
        />
        <br></br>
        <Button variant='outlined' onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {fetching ? <CircularProgress /> : <h1>検索結果</h1>}
      </Box>
    </>
  );
};
export default SearchContainer;
