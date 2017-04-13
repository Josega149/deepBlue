import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigbar extends Component {

  render() {
    return (
      <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                      <LinkContainer to="/">
                        <Navbar.Brand className="head bold" >
                            Azul Profundo
                        </Navbar.Brand>
                      </LinkContainer>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                            <Nav className="bod">
                              <NavDropdown  title="Colombia" id="Colombia">
                                <LinkContainer to="/map">
                                  <MenuItem >Mapa</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/info">
                                  <MenuItem >Info</MenuItem>
                                </LinkContainer>
                              </NavDropdown>
                              <NavDropdown  title="Mundo" id="Mundo">
                                <LinkContainer to="/mapW">
                                  <MenuItem >Mapa</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/info">
                                  <MenuItem >Info</MenuItem>
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
