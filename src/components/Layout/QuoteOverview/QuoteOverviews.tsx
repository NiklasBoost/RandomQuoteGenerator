import "bootstrap/dist/css/bootstrap.min.css";
import { QuoteOverviewsProps } from "../../../types/overviewTypes";
import { QuoteOverview } from "./QuoteOverview";

export const QuoteOverviews = ({
  allQuotesObjects,
  isAllQuotesVisible,
  isFavQuotesVisible,
  isSearchQuotesVisible,
  searchResult,
  removeQuote
}: QuoteOverviewsProps) => {
  const onlyFavs = allQuotesObjects.filter((item) => item.fav === true);

  return (
    <div className="m-5 flex-grow-1 overflow-auto">
      {isAllQuotesVisible && (
        <div>
          <QuoteOverview
            arr={allQuotesObjects}
            removeQuote={removeQuote}
          />
        </div>
      )}

      {isFavQuotesVisible && (
        <div>
          <QuoteOverview
            arr={onlyFavs}
            removeQuote={removeQuote}
          />
        </div>
      )}

      {isSearchQuotesVisible && (
        <div>
          <QuoteOverview
            arr={searchResult}
            removeQuote={removeQuote}
          />
        </div>
      )}
    </div>
  );
};
