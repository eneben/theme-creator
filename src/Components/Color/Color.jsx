import { useState } from "react";
import "./Color.css";
import Button from "../Button/Button";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function toggleShowDeleteConfirmation() {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  }

  function deleteColor() {
    onDeleteColor(color.id);
  }

  function toggleIsEditing() {
    setIsEditing(!isEditing);
  }

  function updateColor(newColor) {
    onUpdateColor(newColor, color.id);
    toggleIsEditing();
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <section className="buttonSection">
        <h3 className="color-card-highlight">{color.hex}</h3>
        <CopyToClipboard copiedText={color.hex} />
      </section>

      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <ContrastChecker
        firstColor={color.hex}
        secondColor={color.contrastText}
      />

      {showDeleteConfirmation && (
        <section className="buttonSection">
          <p className="color-card-highlight">REALLY DELETE?</p>
          <Button
            type="button"
            onClick={toggleShowDeleteConfirmation}
            text="NO, CANCEL"
          />
          <Button type="button" onClick={deleteColor} text="YES, DELETE" />
        </section>
      )}

      {isEditing && (
        <>
          <ColorForm onTransferColor={updateColor} buttonText="UPDATE COLOR" />
          <Button type="button" onClick={toggleIsEditing} text="CANCEL" />
        </>
      )}

      {!showDeleteConfirmation && !isEditing && (
        <section className="buttonSection">
          <Button
            type="button"
            onClick={toggleShowDeleteConfirmation}
            text="DELETE"
          />
          <Button type="button" onClick={toggleIsEditing} text="EDIT" />
        </section>
      )}
    </div>
  );
}
