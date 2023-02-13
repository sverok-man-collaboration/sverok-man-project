import React from "react";
import { Helmet } from "react-helmet-async";

import EnterRoom from "./components/EnterRoom";
import OrganizationInfo from "../../components/OrganizationInfo";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <div>Hem</div>
      <EnterRoom />
      <OrganizationInfo />
    </>
  );
}

export default Home;
