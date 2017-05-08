import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';

//import manejoRegiones from '../../client/manejoRegiones.js'

export default class problematica extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    };
  }

    render() {
        return (
              <div>
                <div className="col-md-2"></div>
                  <div className="col-md-8" ><h2>
                      Datos sobre los corales en colombia
                  </h2>

                  <div id="estadisticasCol">
                  </div></div>
                  <div className="col-md-2"></div>
              </div>

        );
    }
}
