import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

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
        className="rounded-full text-accent bg-primary hover:bg-secondary hover:text-primary p-4 m-4 w-40"
      >
        Back
      </button>
      <div>Om</div>
    </>
  );
}

export default About;
