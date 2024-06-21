import { useEffect, useState } from "react";
import "./ContrastChecker.css";

export default function ContrastChecker({ firstColor, secondColor }) {
  const [contrastResult, setContrastResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchContrast() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({ colors: [firstColor, secondColor] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data! Status Code: ${response.status}`
          );
        }

        const contrastData = await response.json();
        setContrastResult(contrastData.overall);
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
        setErrorMessage(true);
      }
    }

    fetchContrast();
  }, [firstColor, secondColor]);

  const contrastClassNames = {
    Yup: "contrastYup",
    Kinda: "contrastKinda",
    Nope: "contrastNope",
    default: "contrastDefault",
  };

  const contrastClass =
    contrastClassNames[contrastResult] || contrastClassNames.default;

  return (
    <>
      {errorMessage && <p>An error occurred. Have a look in the console.</p>}
      <p className={`contrastResult ${contrastClass}`}>
        Overall Contrast Score: {contrastResult || "loading..."}
      </p>
    </>
  );
}
