export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roleInput">Role</label>
      <input type="text" name="roleInput" id="roleInput" required></input>
      <label htmlFor="hexInput">Hex</label>
      <input type="color" name="hexInput" id="hexInput" required></input>
      <label htmlFor="contrastTextInput">Contrast Text</label>
      <input
        type="color"
        name="contrastTextInput"
        id="contrastTextInput"
        required
      ></input>
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
