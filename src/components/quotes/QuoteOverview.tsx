import { QuoteOverviewProps } from "../../types/overviewTypes"


export function QuoteOverview({allQuotesObjects, isAllQuotesVisible, isFavQuotesVisible, isSearchQuotesVisible, searchResult}: QuoteOverviewProps) {

  const onlyFavs = allQuotesObjects.filter(item => item.fav === true);
  
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
        <div>
          {onlyFavs.map((quoteObject, index) => (
            <div key={index}>
              <p>Quote: {quoteObject.quote}</p>
              <p>Author: {quoteObject.author}</p>
            </div>
          ))}
        </div>
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