import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Nav, Container } from 'react-bootstrap'

const AVAILABLE_DOCS = [
  {
    id: 'myApostroph',
    data: '/docs/myApostroph/fr.md',
  },
  {
    id: 'myFreelance',
    data: '/docs/myFreelance/fr.md'
  }
];

class DocsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, data: "", image: AVAILABLE_DOCS[0].image };
  }

  componentDidMount() {
    if (this.props.match.params) {
      if (this.props.match.params.docId) {
        this.fetchDoc(this.props.match.params.docId);
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params) {
      if (this.props.match.params.docId) {
        if (this.props.match.params.docId !== prevProps.match.params.docId) {
          this.fetchDoc(this.props.match.params.docId);
        }
      }
    }
  }

  render() {
    const { loading, data } = this.state;

    return (
      <Container>
        { loading ? null : <ReactMarkdown source={data} transformImageUri={this.correctImageUri} /> }
      </Container>
    );
  }

  fetchDoc(docId) {
    const doc = AVAILABLE_DOCS.find(e => e.id === docId);

    if (doc) {
        fetch(process.env.PUBLIC_URL + doc.data).then(response => {
          response.text().then(content => {
            console.log(content);
              this.setState({ loading: false, data: content });
          });
        });
    }
  }

  correctImageUri(originalUri){
    return process.env.PUBLIC_URL + '/docs/myFreelance' + originalUri;
  }
}

export default DocsPage;
