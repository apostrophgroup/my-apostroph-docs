/* @flow */

import React from 'react';
import { BrowserRouter,  Switch,  Route,  Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

import AboutPage from './pages/about';
import DocsPage from './pages/docs';

import logo from './assets/svgs/logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Apostroph docs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">myApostroph</Nav.Link>
            <Nav.Link as={Link} to="/docs">myFreelance</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Route path="/about" component={ AboutPage }/>
        <Route path="/docs" component={ DocsPage }/>
      </Container>
  </BrowserRouter>

  /*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>*/

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
