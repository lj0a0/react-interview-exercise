import React from "react";

export default function Spinner(props) {
  const { loading } = props;

  return (
    <div
      id="loading"
      className="loading-container"
      style={!loading ? { display: "none" } : null}
    >
      <div className="d-flex justify-content-center align-items-center loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
