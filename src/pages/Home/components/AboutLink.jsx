import React from "react";
import { Link } from "react-router-dom";

function AboutLink() {
  return (
    <div className="flex justify-center">
      <Link to="about">Om detta projekt</Link>
    </div>
  );
}

export default AboutLink;
