import React from "react";
import Button from "../components/Button";

export default function TemperatureApp() {
  const [temperature, setTemperature] = React.useState(0);
  return (
    <div className="container mt-3 text-center">
      <div
        className="bg-light card m-auto"
        style={{ width: "200px", height: "200px" }}
      >
        <h1
          className={`text-light card border-50 ${
            temperature > 0 ? "bg-danger" : "bg-primary"
          } d-flex align-items-center justify-content-center`}
          style={{ height: 150, width: 150, border: "2px solid #666" }}
        >
          {temperature}°C
        </h1>
        <div className="d-flex my-2">
          <Button
            text="-"
            btnClass={"btn-lg"}
            onClick={() => {
              setTemperature(temperature - 1);
            }}
          />
          <Button
            text="+"
            btnClass={"btn-lg"}
            onClick={() => {
              setTemperature(temperature + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
