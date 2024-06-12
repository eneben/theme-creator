import { useState } from "react";

export default function ColorInput({ id, description, defaultValue }) {
  const [valueColorInput, setValueColorInput] = useState(defaultValue);

  function handleColorInput(event) {
    // console.log(event.target.value);
    setValueColorInput(event.target.value);
  }

  return (
    <>
      <label htmlFor={`${id}Text`}>{description}</label>
      <input
        type="text"
        name={`${id}Text`}
        id={`${id}Text`}
        value={valueColorInput}
        onChange={handleColorInput}
      ></input>
      <input
        type="color"
        name={`${id}Color`}
        id={`${id}Color`}
        value={valueColorInput}
        onChange={handleColorInput}
      ></input>
    </>
  );
}
