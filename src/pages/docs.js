import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Nav, Container } from 'react-bootstrap'

import myApostroph from './../docs/myApostroph/fr.md';
import myFreelance from './../docs/myFreelance/fr.md';


class DocsPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {loading: true};
  }

  /*componentDidMount() {
    console.log(this.doc);

    let toto;

    switch (this.doc) {
      case 'myApostroph':
      toto = myApostroph;
      break;

      case 'myFreelance':
      toto = myFreelance;
      break;
    }

    fetch(toto).then(response => {
      response.text().then(content => {
          //ReactDOM.render(, document.getElementById('tototo'))
          this.setState({ loading: false, data: content });
      });
    });
  }*/

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.doc !== prevState.doc) {
      console.log('hey');
    }
    console.log(nextProps);

    return null;
  }

  render() {
    //let response = await fetch(readmePath);
    //let text = await response.text();

    //console.log(text);

    //const { loading, data } = this.state;

    const loading = true;
    const data = "";

    return (
      <Row>
        <Col className="nav-vertical">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav>
        </Col>
        <Col xs={10}>
          <Container>
            { loading ? null : <ReactMarkdown source={data} /> }
          </Container>
        </Col>
      </Row>
    );
  }
}

export default DocsPage;
