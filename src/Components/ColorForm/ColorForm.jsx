import { uid } from "uid";
import ColorInput from "../ColorInput/ColorInput";

const exampleColor = {
  role: "some color",
  hex: "#54c73d",
  contrastText: "#000000",
};

export default function ColorForm({ onAddColor }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data.roleInput, data.hexInputText, data.contrastTextInputText);

    const newColor = {
      id: uid(),
      role: data.roleInput,
      hex: data.hexInputText,
      contrastText: data.contrastTextInputText,
    };
    onAddColor(newColor);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roleInput">Role</label>
      <input
        type="text"
        name="roleInput"
        id="roleInput"
        placeholder={exampleColor.role}
        required
      ></input>
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
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
