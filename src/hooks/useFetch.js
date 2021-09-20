import { useState } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json';

const useFetchData = () => {
  const [error, setError] = useState({
    freeWord: false,
  });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (value) => {
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

  return { error, setError, fetching, result, handleSubmit };
};
export default useFetchData;
