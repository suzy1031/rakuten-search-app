import React, { useState } from 'react';
import axios from 'axios';

/*
style
*/
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

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json';

const FREE_WORD = 'フリーワード';
const ERROR_FREE_WORD = 'フリーワードを入力してください。';

const SearchContainer = () => {
  const [value, setValue] = useState({
    freeWord: '',
  });
  const [error, setError] = useState({
    freeWord: false,
  });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState([]);

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
          `${BASE_URL}&keyword=${encodedParams}&page=1&applicationId=${process.env.REACT_APP_APPLICATION_ID}`
        )
        .then((response) => {
          setResult(response.data);
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
          label={FREE_WORD}
          variant='outlined'
          name='freeWord'
          value={value.freeWord}
          onChange={handleFreeWord}
          error={error.freeWord && true}
          helperText={error.freeWord && ERROR_FREE_WORD}
        />
        <br></br>
        <Button variant='outlined' onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {fetching ? <CircularProgress /> : <Result result={result} />}
      </Box>
    </>
  );
};
export default SearchContainer;
