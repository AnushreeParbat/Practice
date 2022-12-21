import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p className="about">© 2022 Copyright:</p>
      <Link to="/about" className="about">
        about
      </Link>
    </footer>
  );
};

export default Footer;
