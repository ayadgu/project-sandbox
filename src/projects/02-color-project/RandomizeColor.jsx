import React from "react";
import Title from "../components/Title";

export default function RandomizeColor() {
  const rainbow = "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500";

  return (
    <div className="RandomizeColor">
      <Title classes={"mb-3"} text={"Randomize Color"} />
      <button
        onClick={() => {
          let randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;
          document.body.style.backgroundColor = randomColor;
        }}
        className={`${rainbow} btn btn-primary mb-3`}
      >
        Randomize
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "#fff"; // Reset to white
        }}
        className="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  );
}
