import "bootstrap/dist/css/bootstrap.min.css";
import { QuoteOverviewsProps } from "../../../types/overviewTypes";
import { QuoteOverview } from "./QuoteOverview";

export const QuoteOverviews = ({
  allQuotesObjects,
  isAllQuotesVisible,
  isFavQuotesVisible,
  isSearchQuotesVisible,
  searchResult,
  removeQuote,
  changeDomFeedback,
  feedbackDom,
  isEditing,
  saveChanges,
  toggleEdit,
}: QuoteOverviewsProps) => {
  const onlyFavs = allQuotesObjects.filter((item) => item.fav === true);

  return (
    <div className="m-5 flex-grow-1 overflow-auto">
      {isAllQuotesVisible && (
        <div>
          <QuoteOverview
            arr={allQuotesObjects}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            toggleEdit={toggleEdit}
            isEditing={isEditing}
            saveChanges={saveChanges}
          />
        </div>
      )}

      {isFavQuotesVisible && (
        <div>
          <QuoteOverview
            arr={onlyFavs}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            toggleEdit={toggleEdit}
            isEditing={isEditing}
            saveChanges={saveChanges}
          />
        </div>
      )}

      {isSearchQuotesVisible && (
        <div>
          <QuoteOverview
            arr={searchResult}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            saveChanges={saveChanges}
          />
        </div>
      )}
    </div>
  );
};
