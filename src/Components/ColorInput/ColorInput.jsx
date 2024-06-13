import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput({ id, description, defaultValue }) {
  const [valueColorInput, setValueColorInput] = useState(defaultValue);

  function handleColorInput(event) {
    setValueColorInput(event.target.value);
  }

  return (
    <>
      <label htmlFor={`${id}Text`}>{description}</label>
      <section className="colorInputSection">
        <input
          type="text"
          name={`${id}Text`}
          id={`${id}Text`}
          value={valueColorInput}
          onChange={handleColorInput}
        />
        <input
          type="color"
          id={`${id}Color`}
          value={valueColorInput}
          onChange={handleColorInput}
        />
      </section>
    </>
  );
}
