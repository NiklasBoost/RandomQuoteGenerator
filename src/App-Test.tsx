
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight, faArrowLeft, faPlus, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

 function AppTest() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [feedbackDom, setFeedbackDom] = React.useState('');
  const [outputQuote, setOutputQuote] = React.useState('');
  const [outputAuthor, setOutputAuthor] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  return (
    <Container fluid style={{ minHeight: '100vh'}}>
      <Row className="mt-4">
        <Col>
          <Button className='mx-1' variant="primary">Deine Zitate</Button>
          <Button variant="primary">Deine Favoriten</Button>
        </Col>
        <Col md={6}>
          <InputGroup>
            <FormControl placeholder="Suche nach Zitaten - einfach Enter drücken" />
          </InputGroup>
        </Col>
        <Col>
          <Button className='position-absolute top-0 end-0 p-4' variant='none'>
            <FontAwesomeIcon icon={faCog} size='2x' />
          </Button>
        </Col>
      </Row>
      <Row className="mx-1 mt-5 py-5" style={{ background: '#f5f5f5' }}>
        <Col md={1}>
          <Button variant="light">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Col>
        <Col md={6}>
          <div>Das ist nur ein langes Testzitat, um zu sehen, wie sich die Seite verhält</div>
          <div>- von mir</div>
          <div>
          <span >
            <FontAwesomeIcon 
              className='mt-3 text-danger'
              icon={faHeartBroken}
              size='2x' />
          </span>
          </div>
        </Col>
        <Col md={1}>
          <Button variant="light">
            <FontAwesomeIcon icon={faArrowRight}/>
          </Button>
        </Col>
        <Col className='mx-2' md={1}>
          <Button variant="secondary">
            {isEditing ? 'Speichern' : 'Bearbeiten'}
          </Button>
          <div>FeedbackDiv</div>
        </Col>
        <Col md={1}>
          <Button variant="danger">Entfernen</Button>
          <div>FeedbackDiv</div>
        </Col>
      </Row>
      <Row className="px-3 py-3 fixed-bottom">
        <Col>
          <div>FeedbackDiv</div>
          <InputGroup className='mt-2'>
            <FormControl placeholder="Zitat" />
            <FormControl placeholder="Autor" />
            <Button variant="success">
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AppTest;
