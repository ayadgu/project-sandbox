import React from "react";

export default function Title({ text, classes }) {
  return (
    <h1 className={!classes ? "title text-center" : classes}>
      {text ? text : "Default Title"}
    </h1>
  );
}
