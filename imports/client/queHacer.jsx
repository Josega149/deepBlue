import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';

//import manejoRegiones from '../../client/manejoRegiones.js'

export default class queHacer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    render() {

        return (
            <div>
                <h1>  ¿Cómo ayudar?  </h1>

                <image src="https://static.pexels.com/photos/160203/pexels-photo-160203.jpeg"></image>

                <h2>Emite menos C02</h2>

                <h2>Sé un turista responsable</h2>

                    <div className="row">
                      <div className="col-md-6"><h3>Evita golpear o tocar un arrecife de coral</h3>
                      <div className="imagen" id="imagen1"></div></div>

                    <div className="col-md-6"><h3>
                        No pesques cerca de un arrecife.</h3>
                    <div  className="imagen" id="imagen2"></div></div>

                    <div className="col-md-6"><h3>
                        No tires basura en la playa o el océano</h3>
                    <div  className="imagen" id="imagen3"></div></div>

                    <div className="col-md-6"><h3>
                      Haz snorkel y bucea con cuidado</h3>
                    <div  className="imagen" id="imagen4"></div></div>

                </div>
            </div>

        );
    }
}
