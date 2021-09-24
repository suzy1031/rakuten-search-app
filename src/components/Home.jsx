import React, { useState } from 'react';
// custom hookをimport
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
  // custom hookでreturnされたobjectのvalue
  const { error, setError, fetching, result, handleSubmit } = useFetchData();
  // custom hookに渡すstate
  const [value, setValue] = useState({
    freeWord: '',
  });

  // 検索フィールドを監視
  const handleFreeWord = (e) => {
    // 文字を打ち始めたらstate初期化
    setError({
      freeWord: false,
    });
    // 入力文字を{ freeWord: '' }の形でstateで管理
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
        {/* フェッチ中はローディングがクルクルする */}
        {fetching ? (
          <Box m={10}>
            <CircularProgress />
          </Box>
        ) : (
          // フェッチが完了したらレスポンスデータを表示
          <Result result={result} />
        )}
      </Grid>
    </>
  );
};
export default Home;
