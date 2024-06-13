import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteColor onDeleteColor={onDeleteColor} id={color.id} />
    </div>
  );
}

export function DeleteColor({ id, onDeleteColor }) {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  function toggleDisplayConfirmation() {
    setDisplayConfirmation(!displayConfirmation);
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
            onClick={toggleDisplayConfirmation}
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
          onClick={toggleDisplayConfirmation}
        >
          DELETE
        </button>
      )}
    </>
  );
}
