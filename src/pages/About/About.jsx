import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="rounded-full text-accent bg-primary hover:bg-secondary hover:text-primary px-6 py-2 m-4 flex items-center justify-center"
      >
        <BsChevronLeft className="mr-2" /> Back
      </button>
      <div>Om</div>
    </>
  );
}

export default About;
