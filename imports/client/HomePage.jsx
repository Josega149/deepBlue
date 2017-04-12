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
                    <br/>Una plataforma de uso libre para todos los colombianos.
                  </h2>
                </div>
                <br/>
                <div className="row bod">
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-search fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Explora</strong> los datos
                      </h3>
                      <p className="center">
                        Contamos con registros en tiempo real del mar
                      </p>
                    </Thumbnail>
                  </div>
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-book fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Descubre</strong> sus maravillas
                      </h3>
                      <p className="center">
                        Procuramos facilitar el aprendizaje del mar.
                      </p>
                    </Thumbnail>
                  </div>
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-check fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Verifica</strong> que todo este en orden
                      </h3>
                      <p className="center">
                        Manejamos una escala de colores para indicar características sospechosas que deberían ser revisadas por las entidades encargadas.
                      </p>
                    </Thumbnail>
                  </div>
                </div>
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
