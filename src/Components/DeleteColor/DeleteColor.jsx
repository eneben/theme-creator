import { useState } from "react";
import "./DeleteColor.css";

export default function DeleteColor({ id, onDeleteColor }) {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  function handleFirstDelete() {
    setDisplayConfirmation(true);
  }

  function handleCancelDelete() {
    setDisplayConfirmation(false);
  }

  function handleReallyDelete() {
    onDeleteColor(id);
  }

  return (
    <>
      {displayConfirmation ? (
        <section className="deleteSection">
          <p className="color-card-highlight">Really delete?</p>
          <button
            className="deleteButton"
            type="button"
            onClick={handleCancelDelete}
          >
            CANCEL
          </button>
          <button
            className="deleteButton"
            type="button"
            onClick={handleReallyDelete}
          >
            DELETE
          </button>
        </section>
      ) : (
        <button
          className="deleteButton"
          type="button"
          onClick={handleFirstDelete}
        >
          DELETE
        </button>
      )}
    </>
  );
}
