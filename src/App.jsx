import React from 'react';
import './App.css';
// import Header from './components/Header';
// import SearchContainer from './components/SearchContainer';

import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';
import './index.css';

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <SearchContainer />
//     </div>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
