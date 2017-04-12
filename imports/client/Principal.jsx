import React, { Component } from 'react';
import { render } from 'react-dom';
import Navigbar from './Navigbar.jsx';
import HomePage from './HomePage.jsx';
export default class Principal extends Component {


  render() {
    console.log("porque triple hptas no llega");
    return (
      <div name="principal">
        <HomePage />
      </div>
    );
  }
}
