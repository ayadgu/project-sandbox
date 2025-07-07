import React from "react";
import Alert from "../components/Alert";

export default function AlertApp() {
  return (
    <div className="container m-auto">
      <Alert
        type={"success"}
        message="Success! Operation completed successfully."
      />
      <Alert
        delay={true}
        delayTime={1000}
        type={"error"}
        message="Error! Something went wrong."
      />
      <Alert
        delay={true}
        type={"warning"}
        message="Warning! Please check your input."
        s
      />
    </div>
  );
}
