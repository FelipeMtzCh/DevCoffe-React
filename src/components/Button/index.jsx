import { useState } from "react";
import "./style.scss";

const Button = ({ label, click }) => {
  return (
    <div>
      <button type="button" onClick={click}>
        {label}
      </button>
    </div>
  );
};

export default Button;
