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
                  <h2>
                      ¿Cuál es la importancia de los arrecifes de coral?
                  </h2>

                  <h4>
                      Los arrecifes son un recurso valioso con beneficios inestimables. Muchos países depende de ellos para sostener su industria pesquera y su alimentación, entre ellos Colombia. Esto es dado que sirven de habitat para muchas especies marinas de consumo humano con gran importancia económica. Proveen protección a las costas de la erosión y los embates de las olas. Son fuente de recreación y estimulan el turismo, atrayendo millones de buceadores y visitantes por su diversidad, belleza y colorido. En ellos se encuentran muchos animales que son fuente de alimento de otros organismos superiores, formando unas redes alimentarias importantes. Los fragmentos rotos y acumulaciones de sedimentos y arenas calcáreas que se origina de los propios corales y de los otros organismos con esqueletos calcáreos suplen a las costas con las arenas blancas de la playas.
                      <br/>
                      <br/>
                      A pesar de su importancia ecológica y su inigualable belleza, están siendo amenazados por las actividades humanas. Como es el caso de otros ecosistemas debemos aprender a protegerlos para las generaciones futuras.
                  </h4>

                  <iframe width="560" height="315" src="https://www.youtube.com/embed/UyEw_Rl8mqM" frameborder="0" allowfullscreen></iframe>
                  <p>*Se pueden activar subtitulos en español haciendo click en Configuración>Subtitulos>Traducir Automáticamente>Español</p>

                  <h4>
                      Cual imagen prefieres:
                  </h4>

                  <div className="row">
                    <div className="col-md-6 imagen" id="imagen5" ></div>

                    <div className="col-md-6 imagen" id="imagen6" ></div>
                  </div>
              </div>

        );
    }
}
