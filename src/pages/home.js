import React, { Component, Suspense } from 'react';
import { BrowserRouter,  Switch,  Route,  Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import AboutPage from './about';
import DocsPage from './docs';

import logo from './../assets/svg/logo.svg';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const doc = "myApostroph";
  const docFree = "myFreelance";

  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/home">
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
          <Nav.Link as={Link} to="/home">{t('Home.Nav.Home')}</Nav.Link>
            <Nav.Link as={Link} to={`/docs/${doc}`}>{t('Home.Nav.MyApostroph')}</Nav.Link>
            <Nav.Link as={Link} to={`/docs/${docFree}`}>{t('Home.Nav.MyFreelance')}</Nav.Link>
          </Nav>
          <NavDropdown title={t('Home.Nav.Language')} className="language-selector">
            <NavDropdown.Item
              onClick={() => i18n.changeLanguage(t('Home.Nav.Language.One.Value'))}>
              {t('Home.Nav.Language.One')}
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => i18n.changeLanguage(t('Home.Nav.Language.Two.Value'))}>
              {t('Home.Nav.Language.Two')}
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => i18n.changeLanguage(t('Home.Nav.Language.Three.Value'))}>
              {t('Home.Nav.Language.Three')}
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <div>
      <Route path="/home" component={ AboutPage }/>
        <Route path="/about" component={ AboutPage }/>
        <Route exact path="/docs/:doc" component={ DocsPage }/>
      </div>
    </BrowserRouter>
  );
}

export default HomePage;