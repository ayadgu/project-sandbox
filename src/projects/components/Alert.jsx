import React, { useEffect } from "react";
import Button from "./Button";

export default function Alert({
  type,
  delayTime = 3000,
  delay = false,
  message = "This is an alert!",
}) {
  const [showAlert, setShowAlert] = React.useState(true);
  const closeAlert = (e) => {
    e.target.parentElement.classList.add("fadeAlert");
    setTimeout(() => {
      setShowAlert(false);
    }, 400);
  };
  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delayTime);
  }, [delay]);
  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <div className="alert-close">
          {" "}
          <span className="mr-1">{message}</span>
          <Button text={"x"} btnClass={"btn-close"} onClick={closeAlert} />
        </div>
      </div>
    )
  );
}
