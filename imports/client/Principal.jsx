import React, {Component} from 'react';
import {render} from 'react-dom';
import Navigbar from './Navigbar.jsx';
import HomePage from './HomePage.jsx';
import Map from './Map.jsx';
export default class Principal extends Component {

    render() {

        return (
            <div name="principal">
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2 >Información General de Pozos</h2>
                        <ol className="breadcrumb">
                            <li className="active">
                                <strong id="title-h">Región: Nacional</strong>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div id="world-map" ></div>rtesryseyey
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="ibox float-e-margins">
                                                <div className="ibox-title">
                                                    <span className="label label-primary pull-right">Ahora Mismo</span>
                                                    <h5 id="estadoPozos">Estado de Pozos</h5>
                                                </div>
                                                <div className="ibox-content">
                                                    <div>
                                                        <span>Bien</span>

                                                        <small className="pull-right" id="numProduccion"></small>

                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div  className="progress-bar" id="percentageProduccion"></div>
                                                    </div>
                                                    <div>
                                                        <span>En riesgo</span>
                                                        <small className="pull-right" id="numAbiertos"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div className="progress-bar progress-bar-warning" id="percentageAbiertos"></div>
                                                    </div>
                                                    <div>
                                                        <span>Condiciones anormales</span>
                                                        <small className="pull-right" id="numParados"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div  className="progress-bar progress-bar-danger" id="percentageParados"></div>
                                                    </div>
                                                    <div>
                                                        <span>Estado critico</span>
                                                        <small className="pull-right" id="numClausurados"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div  className="progress-bar progress-bar-info" id="percentageClausurados"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ibox float-e-margins">
                                                <div className="ibox-title">
                                                    <span className="label label-danger pull-right">Hoy</span>
                                                    <h5 id="emergenciasPerc">Emergencias</h5>
                                                </div>
                                                <div className="ibox-content">
                                                    <div className="stat-percent font-bold text-warning">10%
                                                        <i className="fa fa-level-down"></i>
                                                    </div>
                                                    <small>Actualización: {new Date().toDateString()}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ibox float-e-margins">
                                                <div className="ibox-title">
                                                    <span className="label label-warning pull-right">Hoy</span>
                                                    <h5 id="listaEmergen">Lista de Emergencias</h5>
                                                </div>
                                                <div className="ibox-content">
                                                    <div className="scroll_content">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover issue-tracker">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <span className="label label-warning">Andina</span>
                                                                        </td>
                                                                        <td className="issue-info">
                                                                            <a href="#">
                                                                                INCENDIO
                                                                            </a>
                                                                            <small>
                                                                                This is issue with the coresponding note
                                                                            </small>
                                                                        </td>
                                                                        <td>
                                                                            Pozo 1
                                                                        </td>
                                                                        <td>
                                                                            12.02.2015 10:00 am
                                                                        </td>
                                                                        <td>
                                                                            <span className="pie">0.52,1.041</span>
                                                                            2d
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="btn btn-white btn-xs">
                                                                                Tag</button>
                                                                            <button className="btn btn-white btn-xs">
                                                                                Mag</button>
                                                                            <button className="btn btn-white btn-xs">
                                                                                Rag</button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span className="label label-primary">Caribe</span>
                                                                        </td>
                                                                        <td className="issue-info">
                                                                            <a href="#">
                                                                                ELÉCTRICA
                                                                            </a>
                                                                            <small>
                                                                                This is issue with the coresponding note
                                                                            </small>
                                                                        </td>
                                                                        <td>
                                                                            Pozo 6
                                                                        </td>
                                                                        <td>
                                                                            12.02.2015 10:00 am
                                                                        </td>
                                                                        <td>
                                                                            <span className="pie">0.52,1.041</span>
                                                                            2d
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <button className="btn btn-white btn-xs">
                                                                                Tag</button>
                                                                            <button className="btn btn-white btn-xs">
                                                                                Mag</button>
                                                                            <button className="btn btn-white btn-xs">
                                                                                Rag</button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
  );
}
}
