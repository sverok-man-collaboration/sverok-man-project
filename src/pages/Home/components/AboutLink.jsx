import React from "react";
import { Link } from "react-router-dom";

function AboutLink() {
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <h5 className="text-xl">Vill du läsa mer om projektet? </h5>
      <Link to="about">
        <button className="bg-accent text-white hover:bg-accentHover m-4 rounded-full text-lg px-6 py-2">Tryck här!</button>
      </Link>
    </div>
  );
}

export default AboutLink;
