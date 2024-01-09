import { Row, Col } from "react-bootstrap";
import { AllQuotesButton, FavQuotesButton, SettingsButton } from "../Elements/Buttons";
import { Searchbar } from "../Elements/Inputs";
import { QuoteObject } from "../../types/types";

interface HeaderProps {
  allQuotesObjects: QuoteObject[];
  toggleQuotesContainer: (
    stateSetter: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  setIsAllQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFavQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult: React.Dispatch<React.SetStateAction<QuoteObject[]>>;
  setIsSearchQuotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export const Header = ({
  allQuotesObjects,
  toggleQuotesContainer,
  isAllQuotesVisible,
  isFavQuotesVisible,
  isSearchQuotesVisible,
  setIsAllQuotesVisible,
  setIsFavQuotesVisible,
  setSearchResult,
  setIsSearchQuotesVisible,
}: HeaderProps) => {
  
  function resetView() {
    setIsAllQuotesVisible(false);
    setIsFavQuotesVisible(false);
    setIsSearchQuotesVisible(false);
  }

  return (
    <Row className="mt-4">
      <Col>
        <AllQuotesButton
          toggleQuotesContainer={toggleQuotesContainer}
          setIsAllQuotesVisible={setIsAllQuotesVisible}
        />
        <FavQuotesButton
          toggleQuotesContainer={toggleQuotesContainer}
          setIsFavQuotesVisible={setIsFavQuotesVisible}
        />
      </Col>
      <Col md={6}>
        <Searchbar
          toggleQuotesContainer={toggleQuotesContainer}
          allQuotesObjects={allQuotesObjects}
          setSearchResult={setSearchResult}
          isSearchQuotesVisible={isSearchQuotesVisible}
          setIsSearchQuotesVisible={setIsSearchQuotesVisible}
        />
      </Col>
      <Col>
        {isAllQuotesVisible || isFavQuotesVisible || isSearchQuotesVisible ? (
          <button 
            className="btn btn-secondary"
            onClick={resetView}
          >
            Standartansicht
          </button>

        ) : null}
      </Col>
      <Col>
        <p>Zitate: {allQuotesObjects.length}</p> 
        <SettingsButton />
      </Col>
    </Row>
  );
}



