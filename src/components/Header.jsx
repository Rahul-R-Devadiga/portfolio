import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex justify-between font-medium text-xl py-10 sticky top-0">
      <div>Rahul R devadiga</div>
      <div>{currentPath === "/" ? "About" : "Work"}</div>
    </div>
  );
};

export default Header;
