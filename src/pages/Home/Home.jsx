import React from "react";
import AboutLink from "./components/AboutLink";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <AboutLink />
    </>
  );
}

export default Home;
