import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return <div>Header {currentPath === "/" ? "About" : "Work"}</div>;
};

export default Header;
