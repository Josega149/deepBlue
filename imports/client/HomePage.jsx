import React, {Component} from 'react';
import {Well, Thumbnail} from 'react-bootstrap';
import WOW from 'wow.js';

export default class HomePage extends Component {

    render() {
        return (
            <div>
              {new WOW().init()}
                <div className="row head bold center">
                  <h2>
                    Bienvenido a <br/> <br/>
                    <img src="/Azul profundo.png" className="logo" />
                    <br/>Una propuesta que nace ante la problemática ambiental del <strong className="blue">blanqueamiento de los corales </strong>
                     y busca brindar información clave sobre <strong className="blue">causas</strong> y posibles <strong className="blue">soluciones</strong> que el público puede realizar para mitigar
                    los cambios que esto está generando en los ecosistemas.
                  </h2>
                </div>
                <br/>

                <div className="row bod center">
                  <Well>
                    <div className="row">
                      <div className="col-md-3">
                        <img src="https://image.flaticon.com/icons/png/512/24/24331.png" className="colombia" />
                      </div>
                      <div className="col-md-6">
                        <br/>
                        <h1 className="head">
                          Buscamos aportar al cuidado de los ecosistemas marinos en Colombia.
                        </h1>
                      </div>
                      <div className="col-md-3">
                        <img src="/Animals-Coral-icon.png" className="minilogo" />
                      </div>
                    </div>
                  </Well>
                </div>
            </div>
        );
    }
}
