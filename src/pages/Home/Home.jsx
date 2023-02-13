import React from "react";
import { Helmet } from "react-helmet-async";

import EnterRoom from "./components/EnterRoom";
import OrganizationInfo from "../../components/OrganizationInfo";
import AboutLink from "./components/AboutLink";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>

      <EnterRoom />
      <OrganizationInfo />
      <AboutLink />
    </>
  );
}

export default Home;
