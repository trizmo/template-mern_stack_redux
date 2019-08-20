import React from 'react';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import store from './store/store'

// Components
import CandyDisplay from './components/CandyDisplay'
import MainNavBar from './components/MainNavBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <MainNavBar />
        Welcome to mern_stack_redux template
      <CandyDisplay />
      </div>
    </Provider>
  );
}

export default App;
