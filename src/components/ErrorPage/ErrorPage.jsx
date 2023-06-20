import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl text-center mb-2">404</h2>
      <p className="text-center">page not found</p>
      <div className="text-center mt-5">
        <Link to="/">
          <button className="btn btn-primary">Go to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
