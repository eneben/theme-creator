import Button from "../Button/Button";
import "./ThemeSelection.css";

export default function ThemeSelection() {
  function handleAddTheme() {
    console.log("add theme");
  }

  function handleEditTheme() {
    console.log("edit theme");
  }

  function handleDeleteTheme() {
    console.log("delete theme");
  }

  return (
    <section className="themeSelection">
      <form>
        <label htmlFor="themes">Choose a theme:</label>
        <select id="themes" name="themes">
          {/* <option value="default">default</option>
                <option value=""></option> 
                OPTIONS DYNAMISCH ERZEUGEN NACH THEMES
                */}
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
