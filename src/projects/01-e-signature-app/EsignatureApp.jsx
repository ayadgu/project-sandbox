import React from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const [name, setName] = React.useState("Your Name");
  const [date, setDate] = React.useState("");

  const inputStyle = {
    border: "none",
    borderBottom: "1px solid #000",
    outline: "none",
    padding: "5px 10px",
    width: "200px",
  };
  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title"} text={date ? date : "Date of Birth"} />
      <p>
        lorem20 ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum.
        Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod
        voluptatum. Quisquam, quod voluptatum.
      </p>
      <footer
        className="footer text-center d-flex justify-content-center"
        style={{
          gap: "5px",
          justifyContent: "space-around",
          position: "relative",
          top: "10vh",
        }}
      >
        <input
          style={inputStyle}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </footer>
    </div>
  );
}
