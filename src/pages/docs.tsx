import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { Container, Row, Col, Nav, Spinner } from 'react-bootstrap'
import { Link45deg } from 'react-bootstrap-icons';

import ReactMarkdown from 'react-markdown';

interface SummaryLink {
 title: string,
 slug: string
};

const DocsPage = (props: any) => {
  const { i18n } = useTranslation();
  const history: any = useHistory();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<string>('');
  const [docId, setDocId] = useState<string>(props.match.params.docId);
  const [language, setLanguage] = useState<string>(i18n.language.split('-')[0]);

  let summary = Array<SummaryLink>();
  const [summaryDisplay, setSummaryDisplay] = useState<Array<SummaryLink>>(summary);

  useEffect(() => {
    if (JSON.stringify(summaryDisplay) !== JSON.stringify(summary)) {
      setSummaryDisplay(summary);
    }
  }, [summary]); // eslint-disable-line react-hooks/exhaustive-deps

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

  function openErrorPage(code: number, path: string) {
    history.push({
      pathname: '/error',
      code: code,
      valueOne: path
    });
  }

  async function fetchDoc(docId: string, language: string) {
    try {
      const response = await fetch(process.env.PUBLIC_URL + '/docs/' + docId + '/' + language + '.md');
      const content = await response.text();

      if (!content.startsWith('<!DOCTYPE html>')) {
        //summary = [];
        setLoading(false);
        setData(content);

        //Go to anchor
        setTimeout(() => {
          const hash = window.location.hash.substr(1);

          if (hash) {
            const hashElement = document.getElementById(hash);
            if (hashElement) {
              hashElement.scrollIntoView();
            }
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        throw new Error();
      }
    } catch (e) {
      openErrorPage(1000, '/docs/' + docId + '/' + language + '.md');
    }
  }

  function transformImageUri(docId: string, originalUri: string) {
    return process.env.PUBLIC_URL + '/docs/' + docId + originalUri;
  }

  /*function copyToClipboard(slug) {
    navigator.clipboard.writeText(process.env.PUBLIC_URL + '/docs/' + docId + slug);
  }*/

  //https://github.com/rexxars/react-markdown/issues/69
  const headingRenderer = (props: any) => {
    let slug = undefined;
    const headerRef = props.children.find((c: any) => c.props.href !== undefined);

    //If the header contains a link then we take out the slug
    //Set the slug as id for the header
    //Add a nice link
    if (headerRef) {
      slug = headerRef.props.href.replace('#', '');
      headerRef.props.children.push(<Link45deg key={headerRef.props.children.length}/>);

      summary.push({
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
        .summary {
          position: sticky;
          top: 56px;
          height: calc(100vh - 56px);
          background-color: white;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
          padding: 15px;
        }

        .nav {
          height: 100%;
          overflow: auto;
          flex-wrap: nowrap;
        }

        .nav-link {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        `}
      </style>
      <Container fluid>
        { loading ?
          <Row>
            <Col style={{
              justifyContent: 'center',
              display: 'flex'}}>
              <Spinner animation="border" variant="primary"></Spinner>
            </Col>
          </Row> :
          <Row>
            <Col className="summary" xs={3}>
              <Nav className="flex-column">
                <Nav.Link disabled>{docId}</Nav.Link>
              {
                summaryDisplay.map((s) => <Nav.Link href={s.slug}>{s.title}</Nav.Link>)
              }
              </Nav>
            </Col>
            <Col xs={9}>
              <Container>
                <ReactMarkdown
                className="doc-content"
                source={data}
                renderers={{heading: headingRenderer}}
                transformImageUri={(e) => transformImageUri(docId, e)} />
              </Container>
            </Col>
          </Row>
        }
      </Container>
    </>
  );
}

export default DocsPage;
