import "./Color.css";
import DeleteColor from "../DeleteColor/DeleteColor";

export default function Color({ color, onDeleteColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteColor onDeleteColor={onDeleteColor} id={color.id} />
    </div>
  );
}
