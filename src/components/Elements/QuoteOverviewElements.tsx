import { QuoteOverviewElementProps } from "../../types/overviewTypes";
import { RemoveButton, EditButton } from "./Buttons";


export function QuoteOverviewElement({
  arr,
  removeQuote,
  changeDomFeedback,
  feedbackDom,
  isEditing,
  saveChanges,
  editedQuote,
  editedAuthor,
  toggleEdit,
}: QuoteOverviewElementProps) {
  return (
    <div>
      {arr.map((quoteObject, index) => (
        <div key={index}>
          <p>{quoteObject.quote}</p>
          <p>- {quoteObject.author}</p>
          <RemoveButton
            removeQuote={removeQuote}
            changeDomFeedback={changeDomFeedback}
          />
          <EditButton
            feedbackDom={feedbackDom}
            changeDomFeedback={changeDomFeedback}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            saveChanges={() => {
              saveChanges(editedQuote, editedAuthor);
            }}
          />
        </div>
      ))}
    </div>
  );
}