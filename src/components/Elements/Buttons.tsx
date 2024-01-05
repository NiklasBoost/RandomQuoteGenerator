import { useState } from "react";
import { AllQuotesProps, FavQuotesProps } from "../../types/headerTypes";
import { RemoveQuoteButtonProps } from "../../types/middlePartTypes";
import { EditQuoteButtonProps } from "../../types/headerTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export const AllQuotesButton = ({
  toggleQuotesContainer,
  setIsAllQuotesVisible,
}: AllQuotesProps) => {
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
};

export const FavQuotesButton = ({
  toggleQuotesContainer,
  setIsFavQuotesVisible,
}: FavQuotesProps) => {
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
};

export const SettingsButton = () => {
  return (
    <button
      className="position-absolute top-0 end-0 p-4"
      style={{
        border: "none",
        backgroundColor: "white",
      }}
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <FontAwesomeIcon icon={faCog} size="2x" />
    </button>
  );
};

export const RemoveQuoteButton = ({
  removeQuote,
  index,
  allQuotesObjects
}: RemoveQuoteButtonProps) => {
  const [btnFeedbackStyle, setBtnFeedbackStyle] = useState({ display: "none" });

  function showBtnFeedback() {
    if(allQuotesObjects.length > 3) {
      setBtnFeedbackStyle({ display: "block" });
  
      setTimeout(() => {
        setBtnFeedbackStyle({ display: "none" });
      }, 1000);
    }
  }

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          removeQuote(index);
          showBtnFeedback();
        }}
      >
        Entfernen
      </button>
      <div className="ms-2" style={btnFeedbackStyle}>
        Entfernt!
      </div>
    </>
  );
};

export const EditQuoteButton = ({
  isEditing,
  toggleEdit,
  saveChanges,
  feedbackDom,
  changeDomFeedback,
}: EditQuoteButtonProps) => {
  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => {
          if (isEditing) {
            saveChanges();
            changeDomFeedback();
          }
          toggleEdit();
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <div>{feedbackDom}</div>
    </>
  );
};
