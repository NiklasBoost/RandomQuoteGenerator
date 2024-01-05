import { QuoteObject } from "../../../types/types";
import { Row, Col } from "react-bootstrap";
import { RemoveQuoteButton } from "../../Elements/Buttons";


interface QuoteOverviewProps {
  arr: QuoteObject[];
  removeQuote: (i:number) => void;
  allQuotesObjects: QuoteObject[];
}

export const QuoteOverview = ({
  arr,
  removeQuote,
  allQuotesObjects
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
            <RemoveQuoteButton
              index={index}
              removeQuote={removeQuote}
              allQuotesObjects={allQuotesObjects}
            />
          </Col>
          <Col></Col>
        </Row>
      ))}
    </>
  );
}