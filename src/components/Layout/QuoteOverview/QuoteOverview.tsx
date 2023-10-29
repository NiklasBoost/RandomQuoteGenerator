import { QuoteOverviewProps } from "../../../types/overviewTypes";
import { Row, Col } from "react-bootstrap";
import { RemoveButton } from "../../Elements/Buttons";


export const QuoteOverview = ({
  arr,
  removeQuote,
  changeDomFeedback,
  feedbackDom,
  isEditing,
  saveChanges,
  toggleEdit,
}: QuoteOverviewProps) => {
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
              index={index}
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