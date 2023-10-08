import 'bootstrap/dist/css/bootstrap.min.css';
import { QuoteOverviewElementProps, QuoteOverviewProps } from "../../types/overviewTypes"
import { QuoteObject } from '../../types/types';
import { RemoveButton, Edit } from './MiddlePart';

export function QuoteOverview({ allQuotesObjects, isAllQuotesVisible, isFavQuotesVisible, isSearchQuotesVisible, searchResult, removeQuote, changeDomFeedback, feedbackDom, isEditing, toggleEdit, saveChanges, editedQuote, editedAuthor }: QuoteOverviewProps) {

  const onlyFavs = allQuotesObjects.filter(item => item.fav === true);
  
  return (
    <div className="m-5 flex-grow-1 overflow-auto">
      {isAllQuotesVisible && (
        <div>
          <QuoteOverviewElement 
            arr={allQuotesObjects}
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

      {isFavQuotesVisible && (
        <div>
          <QuoteOverviewElement 
            arr={onlyFavs}
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
  )
}

function QuoteOverviewElement({ arr, removeQuote, changeDomFeedback, feedbackDom, isEditing, toggleEdit, saveChanges, editedQuote, editedAuthor }: QuoteOverviewElementProps) {
  return (
    <div>
      {arr.map((quoteObject, index) => (
        <div key={index}>
          <p>Quote: {quoteObject.quote}</p>
          <p>Author: {quoteObject.author}</p>
          <RemoveButton 
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
          />
          <Edit
            feedbackDom={feedbackDom}
            changeDomFeedback={changeDomFeedback}
            isEditing={isEditing}
            toggleEdit={toggleEdit} 
            saveChanges={() => {
              saveChanges(editedQuote, editedAuthor);
          }} />
        </div>
      ))}
    </div>
  
  )
}