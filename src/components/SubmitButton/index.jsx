import React from "react";

const SubmitButton = ({ children }) => {
  return (
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
