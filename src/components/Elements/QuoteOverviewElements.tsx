import { QuoteOverviewElementProps } from "../../types/overviewTypes";
import { Row, Col } from "react-bootstrap";
import { RemoveButton, EditButton } from "./Buttons";


export const QuoteOverviewElement = ({
  arr,
  removeQuote,
  changeDomFeedback,
  feedbackDom,
  isEditing,
  saveChanges,
  editedQuote,
  editedAuthor,
  toggleEdit,
}: QuoteOverviewElementProps) => {
  return (
    <>
      {arr.map((quoteObject, index) => (
        <Row 
          key={index}
          className="mb-5 p-3"
          style={{
            backgroundColor: 'rgb(240, 240, 240)',
            width: '50%'            
          }}
        >
          <Col md={6}>
            <p>{quoteObject.quote}</p>
            <p>- {quoteObject.author}</p>
          </Col>
          <Col md={6}>
            <RemoveButton
              removeQuote={removeQuote}
              changeDomFeedback={changeDomFeedback}
            />
          </Col>
          <Col></Col>
        </Row>
      ))}
    </>
  );
}