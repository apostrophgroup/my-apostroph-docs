import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

class DocsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: true, data: ""};
    this.content = "";
  }

  componentDidMount() {
    fetch(require("../docs/sample.md")).then(response => {
      response.text().then(content => {
          //ReactDOM.render(, document.getElementById('tototo'))
          this.setState({ loading: false, data: content });
      });
    });
  }

  render() {

    const input = '# This is a header\n\nAnd this is a paragraph'
    const readmePath = require("../docs/sample.md");

    //let response = await fetch(readmePath);
    //let text = await response.text();

    //console.log(text);

    const { loading, data } = this.state;

    console.log(loading);

    return (<div>
      { loading ? null : <ReactMarkdown source={data} /> } </div>
    );
  }
}

export default DocsPage;
