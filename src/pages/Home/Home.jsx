import React from "react";
import { Helmet } from "react-helmet-async";
import CallToAction from "./components/CallToAction";
import OrganizationInfo from "../../components/OrganizationInfo";
import AboutLink from "./components/AboutLink";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <CallToAction />
      <OrganizationInfo />
      <AboutLink />
    </>
  );
}

export default Home;
