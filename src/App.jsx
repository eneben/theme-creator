import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { initialColors, initialThemes } from "./lib/colors";
import "./App.css";
import ThemeSelection from "./Components/ThemeSelection/ThemeSelection";
import Theme from "./Components/Theme/Theme";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

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
      <ThemeSelection />
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
