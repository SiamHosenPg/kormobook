import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" font-semibold bg-background-tertiary text-text-secondary px-4 py-2 rounded transition duration-300">
      {text}
    </button>
  );
};

export default Button;
