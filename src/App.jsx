import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import { initialThemes } from "./lib/themes";
import "./App.css";
import ThemeSelection from "./Components/ThemeSelection/ThemeSelection";
import Theme from "./Components/Theme/Theme";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    const newCurrentTheme =
      themes.find((theme) => theme.id === currentTheme?.id) || themes[0];
    setCurrentTheme(newCurrentTheme);
  }, [themes]);

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
              {
                id: uid(),
                role: newColor.roleInput,
                hex: newColor.hexInputText,
                contrastText: newColor.contrastTextInputText,
              },
              ...theme.colors,
            ],
          }
        : theme;
    });
    setThemes(newThemes);
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
