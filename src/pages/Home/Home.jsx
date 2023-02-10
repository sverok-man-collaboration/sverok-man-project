import React from "react";
import { Helmet } from "react-helmet-async";
import CallToAction from "./components/CallToAction";
import OrganizationInfo from "../../components/OrganizationInfo";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <CallToAction />
      <OrganizationInfo />
    </>
  );
}

export default Home;
