import React, { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = forwardRef((props, ref) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      ref={ref}
      style={props.style}
      className="flex items-center justify-between text-base sm:text-lg md:text-xl py-6 sm:py-10 sticky top-0 px-4 sm:px-10 z-50"
    >
      <div>
        <Link to={"/"} className="hover:underline font-medium text-primary">
          Rahul R devadiga
        </Link>
      </div>
      <div>
        {currentPath === "/" ? (
          <Link
            to={"/about"}
            className="hover:underline font-medium text-primary"
          >
            About
          </Link>
        ) : (
          <Link to={"/"} className="hover:underline font-medium text-primary">
            Work
          </Link>
        )}
      </div>
    </div>
  );
});

export default Header;
