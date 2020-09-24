import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Col, Row, Jumbotron } from 'react-bootstrap'

import logoLight from './../assets/svg/logo-light.svg';


class HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
            <Jumbotron className="home-jumbotron" fluid style={{backgroundImage : `url(${logoLight})`}}>
              <Container>
                <h1>Apostroph docs</h1>
                <p>
                  The official documentation for Apostroph tools
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>myAPOSTROPH</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Notre portail en ligne</Card.Subtitle>
              <Card.Text>
                Notre portail vous permet de gerer vos traductions en temps réels.
                Commandez des traductions & demandez des offres, le tout en quelques clics!
              </Card.Text>
              <Card.Link as={Link} to={'/docs/myApostroph'}>Accedez à la documentation</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>myFREELANCE</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Notre portail en ligne</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link as={Link} to={'/docs/myFreelance'}>Accedez à la documentation</Card.Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
</Container>
      </Container>
    );
  }
}

export default HomePage;
