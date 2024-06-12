export default function ColorInput({ placeholder, id, description }) {
    
    function handleColorInput() {

    }


  return (
    <>
      <label htmlFor={id}>{description}</label>
      <input
        type="text"
        value={}
      ></input>
      <input
        type="color"
        name={id}
        id={id}
        placeholder={placeholder}
        value={}
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
