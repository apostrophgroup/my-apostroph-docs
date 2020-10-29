import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Jumbotron } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

import logoLight from './../assets/svg/logo-light.svg';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container fluid style={{marginTop: '40px', marginBottom: '40px'}}>
      <Row>
        <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Jumbotron className="home-jumbotron" fluid style={{backgroundImage : `url(${logoLight})`}}>
            <Container>
              <h1>APOSTROPH <div style={{fontWeight: 300, fontStyle: 'italic', display: 'inline'}}>docs</div></h1>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
