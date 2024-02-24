import React from "react";
import "../css/Button.css";

function Button(props) {
  return <button>{props.children}</button>;
}

export default Button;
