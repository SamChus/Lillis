import { Link } from "react-router-dom";
import open from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menu;
  if (menuOpen) {
    menu = (
      <div className="sidebar">
        <img src={close} alt="close" onClick={() => setMenuOpen(false)} />
        <Link to="/" className="m-3">
          Home
        </Link>
        <Link to="/login-page" className="m-3">
          Login
        </Link>
        <Link to="/register-page">
          <button className="btn btn-sm btn__primary">Sign Up</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="nav">
      <img src={open} alt="open" onClick={() => setMenuOpen(!menuOpen)} />
      <div className="navba">
        <Link to="/" className="m-3">
          Home
        </Link>
        <Link to="/login-page" className="m-3">
          Login
        </Link>
        <Link to="/register-page">
          <button className="btn btn-sm btn__primary">Sign Up</button>
        </Link>
      </div>
      {menu}
    </div>
  );
};

export default Navbar;
