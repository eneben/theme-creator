export default function Button({ type, onClick, text }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
