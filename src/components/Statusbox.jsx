import React from "react";

const Statusbox = ({ text, project }) => {
  return (
    <div
      className={`${
        text === "Active"
          ? "bg-background-success border-border-success "
          : text === "Inactive"
          ? "bg-background-error border-border-error "
          : "bg-warning"
      } px-2 border-dashed border-accent border w-fit `}
    >
      {text}
    </div>
  );
};

export default Statusbox;
