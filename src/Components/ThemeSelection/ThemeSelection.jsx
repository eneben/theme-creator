import { useState } from "react";
import Button from "../Button/Button";
import "./ThemeSelection.css";

export default function ThemeSelection({ themes, onChangeDisplayedTheme }) {
  const [statusTheme, setStatusTheme] = useState("isChoosingTheme");

  function handleAddTheme() {
    setStatusTheme("isAddingTheme");
  }

  function handleEditTheme() {
    setStatusTheme("isEditingTheme");
  }

  function handleDeleteTheme() {
    setStatusTheme("isDeletingTheme");
  }

  function handleCancelButton() {
    setStatusTheme("isChoosingTheme");
  }

  function onDropdownChange(event) {
    const newThemeName = event.target.value;
    onChangeDisplayedTheme(newThemeName);
  }

  function handleAddingThemeSubmit(event) {
    event.preventDefault();
    console.log("handleAddingThemeSubmit function");
    const newTheme = event.target.nameTheme.value;
  }

  function handleEditingThemeSubmit(event) {
    console.log("handleEditingThemeSubmit function");
    console.log("event.target", event.target);
  }

  function handleConfirmDeleteTheme() {
    console.log("handleConfirmDeleteTheme function");
  }

  return (
    <section className="themeSelection">
      {statusTheme === "isChoosingTheme" && (
        <>
          <form className="themeForm" onChange={onDropdownChange}>
            <label htmlFor="themes">Choose a theme:</label>
            <select className="themeChoice" id="themes" name="themes">
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
        </>
      )}

      {statusTheme === "isAddingTheme" && (
        <>
          <form className="themeForm" onSubmit={handleAddingThemeSubmit}>
            <label htmlFor="nameTheme">Theme name:</label>
            <input type="text" id="nameTheme" name="nameTheme" />
            <section className="buttonSection">
              <Button type="submit" text="ADD" />
              <Button
                type="button"
                onClick={handleCancelButton}
                text="CANCEL"
              />
            </section>
          </form>
        </>
      )}

      {statusTheme === "isEditingTheme" && (
        <>
          <form className="themeForm" onSubmit={handleEditingThemeSubmit}>
            <label htmlFor="renameTheme">Theme name:</label>
            <input type="text" id="renameTheme" name="renameTheme" />
            <section className="buttonSection">
              <Button type="submit" text="UPDATE" />
              <Button
                type="button"
                onClick={handleCancelButton}
                text="CANCEL"
              />
            </section>
          </form>
        </>
      )}

      {statusTheme === "isDeletingTheme" && (
        <>
          <p className="warning">
            <span aria-label="warning-emoji">⚠️ </span>Do you really want to
            delete this color theme?
          </p>
          <section className="buttonSection">
            <Button
              type="button"
              onClick={handleConfirmDeleteTheme}
              text="DELETE"
            />
            <Button type="button" onClick={handleCancelButton} text="CANCEL" />
          </section>
        </>
      )}

      {!(
        statusTheme === "isChoosingTheme" ||
        statusTheme === "isAddingTheme" ||
        statusTheme === "isEditingTheme" ||
        statusTheme === "isDeletingTheme"
      ) && (
        <>
          <p>
            Unfortunately something went wrong. Please try to empty your local
            storage and reload.
          </p>
        </>
      )}
    </section>
  );
}
