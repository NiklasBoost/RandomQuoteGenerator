import { Row, Col } from "react-bootstrap";
import { HeaderProps } from "../../types/headerTypes";
import { AllQuotesButton, FavQuotesButton, SettingsButton } from "../Elements/Buttons";
import { Searchbar } from "../Elements/Inputs";

export function Header({
  allQuotesObjects,
  toggleQuotesContainer,
  isAllQuotesVisible,
  isFavQuotesVisible,
  isSearchQuotesVisible,
  setIsAllQuotesVisible,
  setIsFavQuotesVisible,
  setSearchResult,
  setIsSearchQuotesVisible,
}: HeaderProps) {
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
        <SettingsButton />
      </Col>
    </Row>
  );
}



