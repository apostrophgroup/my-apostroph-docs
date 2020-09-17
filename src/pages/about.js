import React, { Component } from 'react';
import { Container, Card, Button, Col, Row, Jumbotron } from 'react-bootstrap'

import logoLight from './../assets/svg/logo-light.svg';


class AboutPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
            <Jumbotron className="home-jumbotron" fluid style={{backgroundImage : `url(${logoLight})`}}>
              <Container>
                <h1>Apostroph docs</h1>
                <p>
                  The official documentation for Apostroph tools such as myApostroph and myFreelance.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
</Container>
      </Container>
    );
  }
}

export default AboutPage;
