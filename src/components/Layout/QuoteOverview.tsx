import "bootstrap/dist/css/bootstrap.min.css";
import { QuoteOverviewProps } from "../../types/overviewTypes";
import { QuoteOverviewElement } from "../Elements/QuoteOverviewElements";

export function QuoteOverview({
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
  editedQuote,
  editedAuthor,
  toggleEdit,
}: QuoteOverviewProps) {
  const onlyFavs = allQuotesObjects.filter((item) => item.fav === true);

  return (
    <div className="m-5 flex-grow-1 overflow-auto">
      {isAllQuotesVisible && (
        <div>
          <QuoteOverviewElement
            arr={allQuotesObjects}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            toggleEdit={toggleEdit}
            isEditing={isEditing}
            saveChanges={saveChanges}
            editedQuote={editedQuote}
            editedAuthor={editedAuthor}
          />
        </div>
      )}

      {isFavQuotesVisible && (
        <div>
          <QuoteOverviewElement
            arr={onlyFavs}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            toggleEdit={toggleEdit}
            isEditing={isEditing}
            saveChanges={saveChanges}
            editedQuote={editedQuote}
            editedAuthor={editedAuthor}
          />
        </div>
      )}

      {isSearchQuotesVisible && (
        <div>
          <QuoteOverviewElement
            arr={searchResult}
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
            feedbackDom={feedbackDom}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            saveChanges={saveChanges}
            editedQuote={editedQuote}
            editedAuthor={editedAuthor}
          />
        </div>
      )}
    </div>
  );
}


