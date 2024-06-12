import { useState } from "react";

export default function ColorInput({ id, description }) {
  const [valueColorInput, setValueColorInput] = useState("");
  // ergänze ausgangswert (exampleColor, aber für versch. inputs)

  function handleColorInput(event) {
    console.log(event.target.value);
    setValueColorInput(event.target.value);
  }

  return (
    <>
      <label htmlFor={id}>{description}</label>
      <input
        type="text"
        value={valueColorInput}
        onChange={handleColorInput}
      ></input>
      <input
        type="color"
        name={id}
        id={id}
        value={valueColorInput}
        onChange={handleColorInput}
      ></input>
      {/* <label htmlFor="hexInput">Hex</label>
      <input
        type="color"
        name="hexInput"
        id="hexInput"
        placeholder="#54c73d"
        required
      ></input>
      <label htmlFor="contrastTextInput">Contrast Text</label>
      <input
        type="color"
        name="contrastTextInput"
        id="contrastTextInput"
        placeholder="#000000"
        required
      ></input> */}
    </>
  );
}
