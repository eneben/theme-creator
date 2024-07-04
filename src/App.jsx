import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import { initialThemes } from "./lib/themes";
import "./App.css";
import ThemeSelection from "./Components/ThemeSelection/ThemeSelection";
import Theme from "./Components/Theme/Theme";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [currentTheme, setCurrentTheme] = useState(
    themes[0] || initialThemes[0]
  );

  // useEffect(() => {
  //   const newCurrentTheme =
  //     themes.find((theme) => theme.id === currentTheme?.id) || themes[0];
  //   setCurrentTheme(newCurrentTheme);
  // }, [themes, currentTheme?.id]);

  function handleChangeDisplayedTheme(newThemeName) {
    const relatedTheme = themes.find((theme) => theme.name === newThemeName);
    setCurrentTheme(relatedTheme);
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

  function handleAddTheme(newTheme) {
    const newThemeObject = { id: uid(), name: newTheme, colors: [] };
    setThemes([...themes, newThemeObject]);
    setCurrentTheme(newThemeObject);
  }

  function handleUpdateTheme(updatedThemeName) {
    const updatedThemes = themes.map((theme) => {
      return theme.id === currentTheme.id
        ? { ...theme, name: updatedThemeName }
        : theme;
    });
    setThemes(updatedThemes);

    const updatedTheme = updatedThemes.find(
      (theme) => theme.id === currentTheme.id
    );
    setCurrentTheme(updatedTheme);
  }

  function handleDeleteTheme() {
    const themesToKeep = themes.filter((theme) => {
      return theme.id !== currentTheme.id;
    });
    setThemes(themesToKeep);

    setCurrentTheme(themesToKeep[0]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeSelection
        themes={themes}
        currentTheme={currentTheme}
        onChangeDisplayedTheme={handleChangeDisplayedTheme}
        onAddTheme={handleAddTheme}
        onUpdateTheme={handleUpdateTheme}
        onDeleteTheme={handleDeleteTheme}
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
