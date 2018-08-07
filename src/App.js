import React, { Component, Fragment } from 'react';
import SearchContainer from './containers/SearchContainer';
// import FavoritesContainer from './containers/FavoritesContainer';
// import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <SearchContainer />
      </Fragment>
    );
  }
}

export default App;
