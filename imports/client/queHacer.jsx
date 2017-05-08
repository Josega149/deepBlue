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
                <h4>Existen múltiples maneras de ayudar a mitigar el daño que están sufriendo los corales marinos. A continuación podrás
                  ver algunos tips o pasos a seguir que te ayudarán a no apoyar o hacer actividades que fomenten el blanqueamiento de los corales. </h4>

                <h2><strong>Emite menos C02</strong></h2>
                <h4>La huella ambiental que está dejando el ser humano es altísima y esto no excluye a los ecosistemas.
                  La contaminación está llegando a un punto de no retorno y es necesario hacer algo al respecto. </h4>

                  <div className="row">
                    <div className="col-md-6"><h3>Usa la bicicleta!</h3>
                    <div className="imagen" id="bici"></div></div>

                  <div className="col-md-6"><h3>
                      Dí NO a los combustibles fosiles.</h3>
                  <div  className="imagen" id="sol"></div></div>

                  <div className="col-md-6"><h3>Lleva tu propia bolsa de tela al mercado</h3>
                  <div className="imagen" id="bolsas"></div></div>

                <div className="col-md-6"><h3> Elimina el consumo de pitillos. </h3>
                <div  className="imagen" id="pitillos"></div></div>


              </div>

                <h2><strong>Sé un turista responsable</strong></h2>

                <h4> Muchos lugares donde se realiza buceo actualmente alrededor del mundo no cumplen con
                  las precauciones pertinentes para cuidar de los arrecifes coralinos. A continuación puedes conocer
                  las razones des esto. </h4>

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
