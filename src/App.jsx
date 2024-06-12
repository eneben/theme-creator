import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <Form />
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
