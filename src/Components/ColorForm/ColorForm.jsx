import ColorInput from "../ColorInput/ColorInput";

const exampleColor = {
  role: "some color",
  hex: "#54c73d",
  contrastText: "#000000",
};

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("formData", formData);
    console.log("data", data);
    console.log("formElements", formElements);

    // const newColor = {};
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roleInput">Role</label>
      <input
        type="text"
        name="roleInput"
        id="roleInput"
        value={exampleColor.role}
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
