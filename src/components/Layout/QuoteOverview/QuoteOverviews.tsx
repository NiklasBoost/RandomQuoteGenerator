import "bootstrap/dist/css/bootstrap.min.css";
import { QuoteObject } from "../../../types/types";
import { QuoteOverview } from "./QuoteOverview";

interface QuoteOverviewsProps {
  allQuotesObjects: QuoteObject[];
  isAllQuotesVisible: boolean;
  isFavQuotesVisible: boolean;
  isSearchQuotesVisible: boolean;
  searchResult: QuoteObject[];
  removeQuote: (i:number) => void;
}

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
            allQuotesObjects={allQuotesObjects}
          />
        </div>
      )}

      {isFavQuotesVisible && (
        <div>
          <QuoteOverview
            arr={onlyFavs}
            removeQuote={removeQuote}
            allQuotesObjects={allQuotesObjects}
          />
        </div>
      )}

      {isSearchQuotesVisible && (
        <div>
          <QuoteOverview
            arr={searchResult}
            removeQuote={removeQuote}
            allQuotesObjects={allQuotesObjects}
          />
        </div>
      )}
    </div>
  );
};
