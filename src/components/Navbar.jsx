import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);

  
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-[60] px-10 pt-3 ${colorChange ? "bg-Merio text-Black shadow-lg" : "bg-transparent text-White"} transition-all duration-600`}>
      <div className={`flex justify-between items-center`}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="hidden md:flex md:items-center list-none gap-8 px-10">
            <a className="hover:underline cursor-pointer">HOME</a>
            <a className="hover:underline cursor-pointer">GALLERY</a>
            <a className="hover:underline cursor-pointer">EVENS</a>
            <a className="hover:underline cursor-pointer">ARTISTS</a>
            <a className="hover:underline cursor-pointer">BLOGS</a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
