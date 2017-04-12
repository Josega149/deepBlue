import React, { Component } from 'react';
import { render } from 'react-dom';
import Navigbar from './Navigbar.jsx';
import HomePage from './HomePage.jsx';
export default class App extends Component {


  render() {
    return (
      <div>
        <div className="row hola">
          <Navigbar />
        </div>
        <div className="row">
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            {React.cloneElement(this.props.children, {...this.state})}
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
