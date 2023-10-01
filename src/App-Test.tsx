
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight, faArrowLeft, faPlus, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

 function AppTest() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [feedbackDom, setFeedbackDom] = React.useState('');
  const [outputQuote, setOutputQuote] = React.useState('');
  const [outputAuthor, setOutputAuthor] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  return (
    <Container fluid style={{ minHeight: '100vh'}}> //Übertragen
      <Row className="mt-4"> //Übertragen
        <Col> //Übertragen
          <Button className='mx-1' variant="primary">Deine Zitate</Button> //Übertragen

          <Button variant="primary">Deine Favoriten</Button>//Übertragen
        </Col>
        <Col md={6}> //Übertragen
          <InputGroup> //Übertragen
            <FormControl placeholder="Suche nach Zitaten - einfach Enter drücken" />
          </InputGroup> //Übertragen
        </Col>
        <Col> //Übertragen
          <Button className='position-absolute top-0 end-0 p-4' variant='none'> //Übertragen
            <FontAwesomeIcon icon={faCog} size='2x' /> //Übertragen
          </Button>
        </Col>
      </Row>
      <Row className="mx-1 mt-5 py-5" style={{ background: '#f5f5f5' }}> //Übertragen
        <Col md={1}> // Übertragen
          <Button variant="light"> /Übertragen
            <FontAwesomeIcon icon={faArrowLeft} /> //Übertragen
          </Button>
        </Col>
        <Col md={6}> //Übertragen
          <div>Das ist nur ein langes Testzitat, um zu sehen, wie sich die Seite verhält</div> //Übertragen
          <div>- von mir</div> //Übertragen
          <div>
          <span > //Übertragen (logic fehl nur noch)
            <FontAwesomeIcon //Übertragen 
              className='mt-3 text-danger'
              icon={faHeartBroken}
              size='2x' />
          </span>
          </div>
        </Col>
        <Col md={1}> //Übertragen
          <Button variant="light"> //Übertragen
            <FontAwesomeIcon icon={faArrowRight}/> //Übertragen
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
      <Row className="px-3 py-3 fixed-bottom"> //Übertragen
        <Col> //Übertragen
          <div>FeedbackDiv</div> //Übertragen
          <InputGroup className='mt-2'> //Übertragen
            <FormControl placeholder="Zitat" /> //Übertragen
            <FormControl placeholder="Autor" /> //Übertragen
            <Button variant="success"> //Übertragen
              <FontAwesomeIcon icon={faPlus} /> //Übertragen
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AppTest;
