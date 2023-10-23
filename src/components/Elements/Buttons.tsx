import { AllQuotesProps, FavQuotesProps } from "../../types/headerTypes";
import { RemoveButtonProps } from "../../types/middlePartTypes";
import { EditButtonProps } from "../../types/headerTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export function AllQuotesButton({
  toggleQuotesContainer,
  setIsAllQuotesVisible,
}: AllQuotesProps) {
  return (
    <button
      className="btn btn-primary mx-1"
      onClick={() => {
        toggleQuotesContainer(setIsAllQuotesVisible);
      }}
    >
      Deine Zitate
    </button>
  );
}

export function FavQuotesButton({
  toggleQuotesContainer,
  setIsFavQuotesVisible,
}: FavQuotesProps) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        toggleQuotesContainer(setIsFavQuotesVisible);
      }}
    >
      Deine Favoriten
    </button>
  );
}

export function SettingsButton() {
  return (
      <button
        className="position-absolute top-0 end-0 p-4"
        style={{ 
          border: 'none',
          backgroundColor: 'white',
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <FontAwesomeIcon icon={faCog} size="2x" />
      </button>
  );
}

export function RemoveButton({
  removeQuote,
  changeDomFeedback,
}: RemoveButtonProps) {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        removeQuote();
        changeDomFeedback();
      }}
      
    >
      Entfernen
    </button>
  );
      
}

export function EditButton({
  isEditing,
  toggleEdit,
  saveChanges,
  feedbackDom,
  changeDomFeedback }: EditButtonProps) {

  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          if (isEditing) {
            saveChanges(); // Call the saveChanges function when editing
            changeDomFeedback();
          }
          toggleEdit(); // Toggle the edit mode
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <div>{feedbackDom}</div>
    </>
  );
}
