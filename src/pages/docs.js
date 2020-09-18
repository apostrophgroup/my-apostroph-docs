import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
//import i18n from 'i18next'

import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap'

const DocsPage = (props) => {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [docId, setDocId] = useState(props.match.params.docId);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (docId !== props.match.params.docId) {
      setDocId(props.match.params.docId)
    } else {
      if (i18n.language !== language) {
        setLanguage(i18n.language);
      }
    }
  });

  useEffect(() => {
    fetchDoc(docId, language);
  }, [docId, language]);


  function fetchDoc(docId, language) {
    console.log('fetch ' + docId + language);
    fetch(process.env.PUBLIC_URL + '/docs/' + docId + '/' + language + '.md').then(response => {
      console.log(response.status);
      response.text().then(content => {
        setLoading(false);
        setData(content);
        //this.setState({ loading: false, docId: docId, data: content });
      }).catch((error) => {
        setLoading(false);
        setData('#Error loading');
        //this.setState({ loading: false, docId: docId,  data: "# Error" });
      });
    }).catch((error) => {
      setLoading(false);
      setData('#Error loading');
      console.log(error);
      //this.setState({ loading: false, docId: docId,  data: "# Error" });
    });
  }

  function correctImageUri(docId, originalUri) {
    return process.env.PUBLIC_URL + '/docs/' + docId + originalUri;
  }

  return (
    <Container>
      { loading ? null : <ReactMarkdown source={data} transformImageUri={(e) => correctImageUri(docId, e)} /> }
    </Container>
  );
}

export default DocsPage;
