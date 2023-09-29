import { QuoteObject } from "../../types/types";


export function QuoteOverview({allQuotesObjects }: { allQuotesObjects: QuoteObject[]}) {
  return (
    <>
      <div>
        {allQuotesObjects.map((quoteObject, index) => (
          <div key={index}>
            <p>Quote: {quoteObject.quote}</p>
            <p>Author: {quoteObject.author}</p>
          </div>
        ))}
      </div>
      <div>Hier werden nur die Favoriten stehen</div>
      <div>Hier werden die Suchergebnisse stehen</div>
    </>
  )
}