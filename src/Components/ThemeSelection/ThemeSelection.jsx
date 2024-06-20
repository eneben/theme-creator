import { useState } from "react";
import Button from "../Button/Button";
import "./ThemeSelection.css";

export default function ThemeSelection({
  themes,
  currentTheme,
  onChangeDisplayedTheme,
  onAddTheme,
  onUpdateTheme,
  onDeleteTheme,
}) {
  const [statusTheme, setStatusTheme] = useState("isChoosingTheme");

  function handleAddButton() {
    setStatusTheme("isAddingTheme");
  }

  function handleEditButton() {
    setStatusTheme("isEditingTheme");
  }

  function handleDeleteButton() {
    setStatusTheme("isDeletingTheme");
  }

  function handleCancelButton() {
    setStatusTheme("isChoosingTheme");
  }

  function onDropdownChange(event) {
    const newThemeName = event.target.value;
    onChangeDisplayedTheme(newThemeName);
    //hier eine controlled component hinzufügen
  }

  function handleAddingThemeSubmit(event) {
    event.preventDefault();
    const newTheme = event.target.nameTheme.value;
    onAddTheme(newTheme);
    event.target.reset();
    setStatusTheme("isChoosingTheme");
  }

  function handleEditingThemeSubmit(event) {
    event.preventDefault();
    const updatedThemeName = event.target.renameTheme.value;
    onUpdateTheme(updatedThemeName);
    event.target.reset();
    setStatusTheme("isChoosingTheme");
  }

  function handleDeleteConfirmation() {
    onDeleteTheme();
    setStatusTheme("isChoosingTheme");
  }

  return (
    <section
      className={
        statusTheme === "isDeletingTheme" ? "deletingTheme" : "themeSelection"
      }
    >
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
            <Button type="button" onClick={handleAddButton} text="ADD" />
            <Button
              type="button"
              onClick={handleEditButton}
              text="EDIT"
              className={currentTheme.name === "Default Theme" && "disabled"}
              disabled={currentTheme.name === "Default Theme"}
            />
            <Button
              type="button"
              onClick={handleDeleteButton}
              text="DELETE"
              className={currentTheme.name === "Default Theme" && "disabled"}
              disabled={currentTheme.name === "Default Theme"}
            />
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
            delete this color theme: {currentTheme.name}?
          </p>
          <section className="buttonSection">
            <Button
              type="button"
              onClick={handleDeleteConfirmation}
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
