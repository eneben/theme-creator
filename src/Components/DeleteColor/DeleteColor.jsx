import { useState } from "react";

export default function DeleteColor({ id }) {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  function handleFirstDelete() {
    setDisplayConfirmation(true);
  }

  function handleCancelDelete() {
    setDisplayConfirmation(false);
  }

  function handleReallyDelete() {
    console.log("This card should really be deleted:", id);
    setDisplayConfirmation(false);
  }

  if (displayConfirmation) {
    return (
      <section className="deleteSection">
        <p className="confirmation">Really delete?</p>
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
    );
  }

  return (
    <button className="deleteButton" type="button" onClick={handleFirstDelete}>
      DELETE
    </button>
  );
}
