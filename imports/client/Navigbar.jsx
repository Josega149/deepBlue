import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigbar extends Component {

  render() {
    return (
      <div>
                <Navbar className="navbar centerNav">
                  <Navbar.Collapse >
                    <Nav className="bod">
                      <NavDropdown  title="Informate" >
                        <LinkContainer to="/info">
                          <MenuItem >Problematica</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/info">
                          <MenuItem >¿Que hacer?</MenuItem>
                        </LinkContainer>
                      </NavDropdown>
                      <NavDropdown  title="Contacto" >
                        <LinkContainer to="/info">
                          <MenuItem >Nosotros</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/info">
                          <MenuItem >Como contribuir</MenuItem>
                        </LinkContainer>
                      </NavDropdown>

                    </Nav>
                      <Nav pullRight>
                      </Nav>
                    <Navbar.Header>
                      <LinkContainer to="/">
                        <Navbar.Brand className="imagenCoralCare" >
                        </Navbar.Brand>
                      </LinkContainer>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                            <Nav className="bod">
                              <NavDropdown  title="Colombia" id="Colombia">
                                <LinkContainer to="/map">
                                  <MenuItem >Mapa</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/info">
                                  <MenuItem >Estadisticas</MenuItem>
                                </LinkContainer>
                              </NavDropdown>
                              <NavDropdown  title="Mundo" id="Mundo">
                                <LinkContainer to="/mapW">
                                  <MenuItem >Mapa</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/info">
                                  <MenuItem >Estadisticas</MenuItem>
                                </LinkContainer>
                              </NavDropdown>

                            </Nav>
                        <Nav pullRight>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    );
  }
}
