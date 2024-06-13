import { useState } from "react";
import "./Color.css";
import Button from "../Button/Button";

export default function Color({ color, onDeleteColor }) {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  function toggleDisplayConfirmation() {
    setDisplayConfirmation(!displayConfirmation);
  }

  function deleteColor() {
    onDeleteColor(color.id);
  }

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

      {displayConfirmation ? (
        <section className="deleteSection">
          <p className="color-card-highlight">REALLY DELETE?</p>
          <Button
            className="deleteButton"
            type="button"
            onClick={toggleDisplayConfirmation}
            text="NO, CANCEL"
          />
          <Button
            className="deleteButton"
            type="button"
            onClick={deleteColor}
            text="YES, DELETE"
          />
        </section>
      ) : (
        <Button
          className="deleteButton"
          type="button"
          onClick={toggleDisplayConfirmation}
          text="DELETE"
        />
      )}
    </div>
  );
}
