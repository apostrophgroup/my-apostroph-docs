import React from 'react';
import { BrowserRouter,  Switch,  Route,  Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import HomePage from './home';
import DocsPage from './docs';
import ErrorPage from './error';

import logo from './../assets/svg/logo.svg';

const RootPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
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
            <Nav.Link as={Link} to="/">{t('Root.Nav.Home')}</Nav.Link>
            <Nav.Link as={Link} to={'/docs/myApostroph'}>{t('Root.Nav.MyApostroph')}</Nav.Link>
          </Nav>
          <NavDropdown title={t('Root.Nav.Language')} className="language-selector">
            <NavDropdown.Item
              onClick={() => i18n.changeLanguage(t('Root.Nav.Language.One.Value'))}>
              {t('Root.Nav.Language.One')}
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => i18n.changeLanguage(t('Root.Nav.Language.Two.Value'))}>
              {t('Root.Nav.Language.Two')}
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/docs/:docId" component={ DocsPage }/>
          <Route exact path="/error" component={ ErrorPage }/>
          <Route component={ ErrorPage }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default RootPage;
