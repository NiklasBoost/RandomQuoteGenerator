import { QuoteOverviewProps } from "../../types/overviewTypes"


export function QuoteOverview({allQuotesObjects, isAllQuotesVisible, isFavQuotesVisible, isSearchQuotesVisible}: QuoteOverviewProps) {
  return (
    <>
      {isAllQuotesVisible && (
        <div>
          {allQuotesObjects.map((quoteObject, index) => (
            <div key={index}>
              <p>Quote: {quoteObject.quote}</p>
              <p>Author: {quoteObject.author}</p>
            </div>
          ))}
        </div>
      )}

      {isFavQuotesVisible && (
        <div>Hier werden nur die Favoriten stehen</div>
      )}
      
      {isSearchQuotesVisible && (
        <div>
          {searchResult.map((quoteObject, index) => (
            <div key={index}>
              <p>Quote: {quoteObject.quote}</p>
              <p>Author: {quoteObject.author}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}