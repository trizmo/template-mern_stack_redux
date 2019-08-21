import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux';
import store from './store/store'
import { loadUser } from './store/actions/authActions'

// Components
import CandyDisplay from './components/CandyDisplay'
import MainNavBar from './components/MainNavBar';
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }


  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <MainNavBar />
          Welcome to mern_stack_redux template
      <BrowserRouter>
            <Switch>
              <Route exact path="/" component={CandyDisplay} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );

  }

}

export default App;
