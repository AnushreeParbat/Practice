import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const About = () => {
  return (
    <div className="container">
      <Header />
      <h4>Version 1.1.1</h4>
      <Link to="/" style={{ color: "black" }}>
        Back
      </Link>
    </div>
  );
};

export default About;