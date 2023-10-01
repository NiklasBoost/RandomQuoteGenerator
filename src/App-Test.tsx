
import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

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
          <Button variant="primary">Deine Zitate</Button>
          <Button className='mt-1' variant="primary">Deine Favoriten</Button>
        </Col>
        <Col xs={6}>
          <InputGroup>
            <FormControl placeholder="Suche nach Zitaten" />
          </InputGroup>
        </Col>
        <Col>
          <div>
            <Button variant="secondary">
              {isEditing ? 'Speichern' : 'Bearbeiten'}
            </Button>
            <div>{feedbackDom}</div>
          </div>
        </Col>
        <Col>
          <Button variant="primary">
            <FontAwesomeIcon icon={faCog} />
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={1}>
          <Button variant="light">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Col>
        <Col xs={6}>
          <div>Das ist nur ein langes Testzitat, um zu sehen, wie sich die Seite verhält</div>
          <div>- von mir</div>
          <div>
            <Form.Check
              type="checkbox"
              label="Favorit?"
            />
          </div>
        </Col>
        <Col xs={1}>
          <Button variant="light">
            <FontAwesomeIcon icon={faArrowRight}/>
          </Button>
        </Col>
        <Col>
          <Button variant="danger">Entfernen</Button>
        </Col>
        <Col>
          <div>{feedbackDom}</div>
        </Col>
      </Row>
      <Row className="px-3 py-3 fixed-bottom">
        <Col>
          <div>{feedback}</div>
          <InputGroup>
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
