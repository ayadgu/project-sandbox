import React from "react";

export default function Button({ text = "Click", btnClass, icon, onClick }) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {icon} {text}
    </button>
  );
}
