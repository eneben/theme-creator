import { useEffect, useState } from "react";

export default function ContrastChecker({ firstColor, secondColor }) {
  const [contrastResult, setContrastResult] = useState(null);

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

      console.log("contrastData", contrastData);
      console.log("contrastResult", contrastResult);
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchContrast();
  }, [firstColor, secondColor]);

  return (
    <p className="contrastScore">
      Overall Contrast Score: {contrastResult ? contrastResult : "loading..."}
    </p>
  );
}
