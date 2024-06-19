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

  function handleAddColor(newColor) {
    const newThemes = themes.map((theme) => {
      return theme.id === currentTheme.id
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

  function handleDeleteColor(id) {
    const newThemes = themes.map((theme) => {
      return theme.id === currentTheme.id
        ? {
            ...theme,
            colors: theme.colors.filter((color) => {
              return color.id !== id;
            }),
          }
        : theme;
    });

    setThemes(newThemes);

    const newCurrentTheme = newThemes.find(
      (theme) => theme.id === currentTheme.id
    );
    setCurrentTheme(newCurrentTheme);
  }

  function handleUpdateColor(newColor, id) {
    const newThemes = themes.map((theme) => {
      return theme.id === currentTheme.id
        ? {
            ...theme,
            colors: theme.colors.map((color) => {
              return color.id === id
                ? {
                    ...color,
                    role: newColor.roleInput,
                    hex: newColor.hexInputText,
                    contrastText: newColor.contrastTextInputText,
                  }
                : color;
            }),
          }
        : theme;
    });

    setThemes(newThemes);

    const newCurrentTheme = newThemes.find(
      (theme) => theme.id === currentTheme.id
    );
    setCurrentTheme(newCurrentTheme);
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
