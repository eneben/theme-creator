import ColorInput from "../ColorInput/ColorInput";

exampleColor = { role: "some color", hex: "#123456", contrastText: "#ffffff" };

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("formData", formData);
    console.log("data", data);
    console.log("formElements", formElements);

    const newColor = {};
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roleInput">Role</label>
      <input
        type="text"
        name="roleInput"
        id="roleInput"
        value="some color"
        required
      ></input>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
