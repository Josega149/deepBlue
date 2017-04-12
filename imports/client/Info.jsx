import React, { Component } from 'react';
import { render } from 'react-dom';
import Navigbar from './Navigbar.jsx';
import HomePage from './HomePage.jsx';
export default class Info extends Component {


  render() {
    return (
      <div name="app">
        <Navigbar />
        <HomePage />
      </div>
    );
  }
}
