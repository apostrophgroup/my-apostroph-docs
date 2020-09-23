import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap'
import { useTranslation, Trans } from 'react-i18next'
import { BugFill } from 'react-bootstrap-icons';

const ErrorPage = (props) => {
  const { t, i18n } = useTranslation();

  const [errorCode, setErrorCode] = useState(props.location.code ? props.location.code : 0);
  const [valueOne, setValueOne] = useState(props.location.valueOne ? props.location.valueOne : '');
  return (
    <Container>
      <Row>
        <Col sm={2}>
        <BugFill color='var(--apostroph-color)' size={96} style={{display: 'block', margin: 'auto'}} />
        </Col>
        <Col sm={10}>
          <h1>
            {t('Error.Title')}
          </h1>
          <p>
            {t('Error.Description')}
          </p>
        </Col>
      </Row>
      <Row>
        <Col style={{marginTop: '3em'}}>
          <Alert variant='info'>
            <Alert.Heading>{t('Error.' + errorCode + '.Title')}</Alert.Heading>
            <p>
              <Trans i18nKey={'Error.' + errorCode + '.Description'} values={{valueOne:valueOne}}/>
            </p>
            <hr />
            <p className='mb-0'>
              {t('Error.' + errorCode + '.Solution')}
            </p>
            <p style={{textAlign: 'right'}}>
              <Trans i18nKey={'Error.Code'} values={{ code:errorCode }}/>
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
