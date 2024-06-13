import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import Button from "../Button/Button";

const exampleColor = {
  role: "some color",
  hex: "#54c73d",
  contrastText: "#000000",
};

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newColor = Object.fromEntries(formData);
    onAddColor(newColor);
    event.target.elements.roleInput.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="roleInput">Role</label>
      <input
        type="text"
        name="roleInput"
        id="roleInput"
        defaultValue={exampleColor.role}
        required
      />
      <ColorInput
        id="hexInput"
        defaultValue={exampleColor.hex}
        description="Hex"
      />
      <ColorInput
        id="contrastTextInput"
        defaultValue={exampleColor.contrastText}
        description="Contrast Text"
      />
      <Button className="addColorButton" type="submit" text="ADD COLOR" />
    </form>
  );
}
