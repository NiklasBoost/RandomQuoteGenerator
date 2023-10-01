import { Row, Col, Button } from "react-bootstrap";
import { MiddlePartProps, GoToLastQuoteProps, OutputsProps, GoToNextQuoteProps, RemoveButtonProps } from "../../types/middlePartTypes";
import { EditProps } from "../../types/headerTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

export function MiddlePart({ 
  editedQuote,
  editedAuthor,
  saveChanges,
  outputQuote, 
  outputAuthor, 
  nextQuote, 
  lastQuote, 
  removeQuote,
  isEditing,
  setEditedQuote,
  setEditedAuthor,
  allQuotesObjects,
  currentQIndex,
  feedbackDom,
  changeDomFeedback,
  isOutputVisible,
  setIsEditing}: MiddlePartProps) {
    const toggleEdit = () => {
      setIsEditing(!isEditing);
    };
  

  return (
    <>
      {isOutputVisible && (
      
        <Row 
          className="mx-1 mt-5 py-5"
          style={{background: '#f5f5f5'}}
        >
          <Col md={1}>
            <GoToLastQuote lastQuote={lastQuote} />
          </Col>
          <Col md={6}>
            {isEditing ? (
              <div>
                <input 
                  type="text"
                  placeholder={outputQuote}
                  onChange={(e) => setEditedQuote(e.target.value)}
                />
                <input
                  type="text"
                  placeholder={outputAuthor}
                  onChange={(e) => setEditedAuthor(e.target.value)} 
                  onKeyDown={(event) => {
                    if(event.key === 'Enter') {
                      saveChanges(editedQuote, editedAuthor);
                      changeDomFeedback();
                    }
                  }}
                />
              </div>
            ) : (
              <Outputs 
                outputQuote={outputQuote} 
                outputAuthor={outputAuthor}
                allQuotesObjects={allQuotesObjects} 
                currentQIndex={currentQIndex}
              />
            )}
          </Col>
          <Col md={1}>
            <GoToNextQuote nextQuote={nextQuote} />
          </Col>
          <Col className="mx-2" md={1}>
          <Edit 
            feedbackDom={feedbackDom}
            changeDomFeedback={changeDomFeedback}
            isEditing={isEditing}
            toggleEdit={toggleEdit} 
            saveChanges={() => {
              saveChanges(editedQuote, editedAuthor);
            }} />
          </Col>
          <Col md={1}>
            <RemoveButton 
              removeQuote={removeQuote}
              changeDomFeedback={changeDomFeedback} />
          </Col>
        </Row>
      
      )}    
    </>
  )
}

function GoToLastQuote({ lastQuote }: GoToLastQuoteProps) {
  
  return (
    <Button 
      variant="light"
      onClick={lastQuote}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Button>

  )
}


function Outputs({outputQuote, outputAuthor, allQuotesObjects, currentQIndex}: OutputsProps) {
  const object = allQuotesObjects[currentQIndex];

  function sendCheckboxState() {
    if(object) {
      const checked = object.fav;
      const newValue = !checked;
      allQuotesObjects[currentQIndex].fav = newValue;
      return;
    } 
    return sendCheckboxState;
  }

  if (!object) {
    return null;
  }
  
 return (
  <>
    <div>{outputQuote}</div>
    <div>{outputAuthor}</div>
    <span >
      <FontAwesomeIcon 
        className='mt-3 text-danger'
        icon={faHeartBroken}
        size='2x' />
    </span>
    {/* <label>favorite?</label>
    <input 
      type="checkbox" 
      checked={object.fav}
      onChange={sendCheckboxState}
    />  */}
  </>

 )
}


function GoToNextQuote({ nextQuote }: GoToNextQuoteProps) {
 
  return ( 
    <Button 
      variant="light" 
      onClick={nextQuote}>
       <FontAwesomeIcon icon={faArrowRight}/>
    </Button>

  )
}


function RemoveButton({ removeQuote, changeDomFeedback }:RemoveButtonProps) {
 
  return (
    <Button 
      onClick={ () => {
        removeQuote();
        changeDomFeedback();
      }}
      variant="danger">
      Entfernen
    </Button>
  
  )
}




  function Edit({isEditing, toggleEdit, saveChanges, feedbackDom, changeDomFeedback} : EditProps) {

    return (
      <>
        <Button 
          variant="secondary"
          onClick={() => {
            if (isEditing) {
              saveChanges(); // Call the saveChanges function when editing
              changeDomFeedback();
            }
            toggleEdit(); // Toggle the edit mode
          }}
        >  
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <div>{feedbackDom}</div>
      </>
    
    );
  }
  