import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Nav, Container } from 'react-bootstrap'


class DocsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: true, data: ""};
    this.content = "";
  }

  componentDidMount() {
    fetch(require("../docs/myFreelance/fr.md")).then(response => {
      response.text().then(content => {
          //ReactDOM.render(, document.getElementById('tototo'))
          this.setState({ loading: false, data: content });
      });
    });
  }

  render() {
    //let response = await fetch(readmePath);
    //let text = await response.text();

    //console.log(text);

    const { loading, data } = this.state;

    console.log(loading);

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
