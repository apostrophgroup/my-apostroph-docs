import React from 'react';
import { BrowserRouter,  Switch,  Route,  Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import AboutPage from './about';
import DocsPage from './docs';

import logo from './../assets/svg/logo.svg';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            <Nav.Link as={Link} to={`/docs/myApostroph`}>{t('Home.Nav.MyApostroph')}</Nav.Link>
            <Nav.Link as={Link} to={`/docs/myFreelance`}>{t('Home.Nav.MyFreelance')}</Nav.Link>
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
        <Switch>
          <Route path="/home" component={ AboutPage }/>
          <Route path="/about" component={ AboutPage }/>
          <Route exact path="/docs/:docId" component={ DocsPage }/>
          <Route component={ AboutPage }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default HomePage;
