import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import { initialThemes } from "./lib/colors";
import "./App.css";
import ThemeSelection from "./Components/ThemeSelection/ThemeSelection";
import Theme from "./Components/Theme/Theme";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  function handleChangeDisplayedTheme(newThemeName) {
    const relatedThemeIndex = themes.findIndex(
      (theme) => theme.name === newThemeName
    );
    setCurrentTheme(themes[relatedThemeIndex]);
  }

  // Bei AddColor u.ä.: 1. in welchem Theme befinden wir uns?
  // 2. dann in diesem Theme das colors array verändern.
  // 3. also dafür themes[array in dem wir uns befinden].colors ändern.

  function handleAddColor(newColor) {
    const newThemes = themes.map((theme) => {
      theme.id === currentTheme.id
        ? {
            ...theme,
            colors: [
              ...theme.colors,
              {
                id: uid(),
                role: newColor.roleInput,
                hex: newColor.hexInputText,
                contrastText: newColor.contrastTextInputText,
              },
            ],
          }
        : theme;
    });

    setThemes(newThemes);

    const newCurrentTheme = newThemes.find(
      (theme) => theme.id === currentTheme.id
    );
    setCurrentTheme(newCurrentTheme);
  }

  // function handleAddColor(newColor) {
  //   setColors([
  //     {
  //       id: uid(),
  //       role: newColor.roleInput,
  //       hex: newColor.hexInputText,
  //       contrastText: newColor.contrastTextInputText,
  //     },
  //     ...colors,
  //   ]);
  // }

  function handleDeleteColor(id) {
    const colorsToKeep = colors.filter((color) => {
      return color.id !== id;
    });
    setColors(colorsToKeep);
  }

  function handleUpdateColor(newColor, id) {
    setColors(
      colors.map((color) => {
        return color.id === id
          ? {
              ...color,
              role: newColor.roleInput,
              hex: newColor.hexInputText,
              contrastText: newColor.contrastTextInputText,
            }
          : color;
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeSelection
        themes={themes}
        onChangeDisplayedTheme={handleChangeDisplayedTheme}
      />
      <Theme
        colors={currentTheme.colors}
        onAddColor={handleAddColor}
        onDeleteColor={handleDeleteColor}
        onUpdateColor={handleUpdateColor}
      />
    </>
  );
}

export default App;
