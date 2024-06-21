import ColorForm from "../ColorForm/ColorForm";
import Color from "../Color/Color";

export default function Theme({
  colors,
  onAddColor,
  onDeleteColor,
  onUpdateColor,
}) {
  return (
    <>
      <ColorForm onTransferColor={onAddColor} buttonText="ADD COLOR" />
      <>
        {colors.length === 0 ? (
          <p className="noColorsMessage">
            No colors... start by adding one!
            <span role="img" aria-label="smile-emoji">
              🙂
            </span>
          </p>
        ) : (
          colors.map((color) => {
            return (
              <Color
                onDeleteColor={onDeleteColor}
                onUpdateColor={onUpdateColor}
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
