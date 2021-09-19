import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <>
      <Header />
      <SearchContainer />
    </>
  );
}

export default App;
