import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-3">
      <h1 className="text-2xl font-extrabold">Coffee Club</h1>
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/addCoffee" className="mr-4">
          Add Coffee
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
