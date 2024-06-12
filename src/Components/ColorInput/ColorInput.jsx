import { useState } from "react";

export default function ColorInput({ id, description, defaultValue }) {
  const [valueColorInput, setValueColorInput] = useState({ defaultValue });

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
    </>
  );
}
