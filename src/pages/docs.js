import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link45deg } from 'react-bootstrap-icons';

import ReactMarkdown from 'react-markdown';

const DocsPage = (props) => {
  const { i18n } = useTranslation();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [docId, setDocId] = useState(props.match.params.docId);
  const [language, setLanguage] = useState(i18n.language.split('-')[0]);

  let arrayHeaders = [];

  const [headers, setHeaders] = useState(arrayHeaders);

  useEffect(() => {
    if (headers.length != arrayHeaders.length) {
      setHeaders(arrayHeaders);
    }
    console.log('effect', arrayHeaders);

    //

  }, [arrayHeaders]);

  useEffect(() => {
    if (docId !== props.match.params.docId) {
      setDocId(props.match.params.docId)
    } else {
      if (i18n.language !== language) {
        setLanguage(i18n.language.split('-')[0]);
      }
    }
  }, [props.match.params.docId, i18n.language, docId, language]);

  useEffect(() => {
    fetchDoc(docId, language);
  }, [docId, language]); // eslint-disable-line react-hooks/exhaustive-deps

  function openErrorPage(code, path) {
    history.push({
      pathname: '/error',
      code: code,
      valueOne: path
    });
  }

  async function fetchDoc(docId, language) {
    try {
      arrayHeaders = [];

      const response = await fetch(process.env.PUBLIC_URL + '/docs/' + docId + '/' + language + '.md');
      const content = await response.text();

      if (!content.startsWith('<!DOCTYPE html>')) {
        setLoading(false);
        setData(content);

        //Go to anchor
        setTimeout(() => {
          const hash = window.location.hash.substr(1);

          if (hash) {
            document.getElementById(hash).scrollIntoView();
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        throw new Error(1000);
      }
    } catch (e) {
      openErrorPage(1000, '/docs/' + docId + '/' + language + '.md');
    }
  }

  function transformImageUri(docId, originalUri) {
    return process.env.PUBLIC_URL + '/docs/' + docId + originalUri;
  }

  /*function copyToClipboard(slug) {
    navigator.clipboard.writeText(process.env.PUBLIC_URL + '/docs/' + docId + slug);
  }*/

  //https://github.com/rexxars/react-markdown/issues/69
  function headingRenderer(props) {
    let slug = undefined;
    const headerRef = props.children.find((c) => c.props.href !== undefined);

    //If the header contains a link then we take out the slug
    //Set the slug as id for the header
    //Add a nice link

    if (headerRef) {
      slug = headerRef.props.href.replace('#', '');
      headerRef.props.children.push(<Link45deg key={headerRef.props.children.length}/>);

      arrayHeaders.push({
        title: props.children[0].props.value,
        slug: headerRef.props.href
      });
    }

    return React.createElement('h' + props.level,
            slug ? {id: slug} : undefined,
            props.children);
  }

  return (
    <>
    <style type="text/css">
    {`
    .test {
      position: sticky;
      top: 4rem;
      height: calc(100% - 4rem);
    }
    `}
  </style>

    <Container fluid>
      <Row>
      { loading ? null :
        <>
        <Col className="test" lg={3}>
          <ListGroup>
          {headers.map((h) =>
            <ListGroup.Item as="a" href={h.slug}>{h.title}</ListGroup.Item>
          )}
          </ListGroup>
        </Col>
        <Container>
        <Col>
          <ReactMarkdown
          className="doc-content"
          source={data}
          renderers={{heading: headingRenderer}}
          transformImageUri={(e) => transformImageUri(docId, e)} />
        </Col>
        </Container>
        </>
      }
      </Row>
    </Container>
    </>
  );
}

export default DocsPage;
