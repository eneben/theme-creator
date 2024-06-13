import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import "./App.css";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

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

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <>
        {colors.length === 0 ? (
          <p className="noColorsMessage">
            No colors... start by adding one!
            <span aria-label="smile-emoji">🙂</span>
          </p>
        ) : (
          colors.map((color) => {
            return (
              <Color
                onDeleteColor={handleDeleteColor}
                key={color.id}
                color={color}
              />
            );
          })
        )}
      </>
    </>
  );
}

export default App;
