import { Row, Col } from "react-bootstrap";
import { HeaderProps } from "../../types/headerTypes";
import { AllQuotesButton, FavQuotesButton, SettingsButton } from "../Elements/Buttons";
import { Searchbar } from "../Elements/Inputs";

export function Header({
  allQuotesObjects,
  toggleQuotesContainer,
  setIsAllQuotesVisible,
  setIsFavQuotesVisible,
  setSearchResult,
  setIsSearchQuotesVisible,
}: HeaderProps) {
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
          allQuotesObjects={allQuotesObjects}
          setSearchResult={setSearchResult}
          toggleQuotesContainer={toggleQuotesContainer}
          setIsSearchQuotesVisible={setIsSearchQuotesVisible}
        />
      </Col>
      <Col>
        <SettingsButton />
      </Col>
    </Row>
  );
}



