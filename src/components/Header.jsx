import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex justify-between font-medium text-xl py-10 sticky top-0 bg-white">
      <div>
        <Link to={"/"} className="hover:underline">
          Rahul R devadiga
        </Link>
      </div>
      <div>
        {currentPath === "/" ? (
          <Link to={"/about"} className="hover:underline">
            About
          </Link>
        ) : (
          <Link to={"/"} className="hover:underline">
            Work
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
