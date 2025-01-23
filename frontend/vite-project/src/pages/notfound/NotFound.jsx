import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div className="mainss">
      <Helmet>
        <title>Not-Found 404</title>
      </Helmet>
      <h1>404 Not Found</h1>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Home
      </button>
    </div>
  );
}
