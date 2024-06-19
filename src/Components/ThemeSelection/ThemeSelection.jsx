import Button from "../Button/Button";
import "./ThemeSelection.css";

export default function ThemeSelection({ themes, onChangeDisplayedTheme }) {
  function handleAddTheme() {
    console.log("add theme");
  }

  function handleEditTheme() {
    console.log("edit theme");
  }

  function handleDeleteTheme() {
    console.log("delete theme");
  }

  function onDropdownChange(event) {
    const newThemeName = event.target.value;
    onChangeDisplayedTheme(newThemeName);
  }

  return (
    <section className="themeSelection">
      <form className="dropdown-form" onChange={onDropdownChange}>
        <label htmlFor="themes">Choose a theme:</label>
        <select id="themes" name="themes">
          {themes.map((theme) => {
            return (
              <option key={theme.id} value={theme.name}>
                {theme.name}
              </option>
            );
          })}
        </select>
      </form>
      <section className="buttonSection">
        <Button type="button" onClick={handleAddTheme} text="ADD" />
        <Button type="button" onClick={handleEditTheme} text="EDIT" />
        <Button type="button" onClick={handleDeleteTheme} text="DELETE" />
      </section>
    </section>
  );
}
