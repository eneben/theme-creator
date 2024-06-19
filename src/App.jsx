import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { initialThemes } from "./lib/colors";
import "./App.css";
import ThemeSelection from "./Components/ThemeSelection/ThemeSelection";
import Theme from "./Components/Theme/Theme";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: themes[0].colors,
  });

  function handleChangeDisplayedTheme(newThemeName) {
    const relatedThemeIndex = themes.findIndex(
      (theme) => theme.name === newThemeName
    );
    setColors(themes[relatedThemeIndex].colors);
  }

  function handleAddColor(newColor) {
    setColors([
      {
        id: uid(),
        role: newColor.roleInput,
        hex: newColor.hexInputText,
        contrastText: newColor.contrastTextInputText,
      },
      ...colors,
    ]);
  }

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
        colors={colors}
        onAddColor={handleAddColor}
        onDeleteColor={handleDeleteColor}
        onUpdateColor={handleUpdateColor}
      />
    </>
  );
}

export default App;
