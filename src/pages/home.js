import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Jumbotron } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import logoLight from './../assets/svg/logo-light.svg';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Jumbotron className="home-jumbotron" fluid style={{backgroundImage : `url(${logoLight})`}}>
            <Container>
              <h1>{t('Home.Jumbo.Title')}</h1>
              <p>{t('Home.Jumbo.Subtitle')}</p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{t('Home.CardOne.Title')}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {t('Home.CardOne.Subtitle')}
                </Card.Subtitle>
                <Card.Text>
                  {t('Home.CardOne.Text')}
                </Card.Text>
                <Card.Link as={Link} to={'/docs/myApostroph'}>
                  {t('Home.CardOne.Link')}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{t('Home.CardTwo.Title')}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {t('Home.CardTwo.Subtitle')}
                </Card.Subtitle>
                <Card.Text>
                  {t('Home.CardTwo.Text')}
                </Card.Text>
                <Card.Link as={Link} to={'/docs/myFreelance'}>
                  {t('Home.CardTwo.Link')}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
