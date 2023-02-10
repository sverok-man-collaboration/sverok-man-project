import React from "react";
import { Helmet } from "react-helmet-async";
import CallToAction from "./components/CallToAction";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <CallToAction />
    </>
  );
}

export default Home;
