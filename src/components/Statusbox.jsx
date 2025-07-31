import React from "react";

const Statusbox = ({ text }) => {
  return (
    <div
      className={`${
        text === "Active"
          ? "bg-background-success border-border-success "
          : "bg-warning"
      } px-2 border-dashed border-accent border`}
    >
      {text}
    </div>
  );
};

export default Statusbox;
