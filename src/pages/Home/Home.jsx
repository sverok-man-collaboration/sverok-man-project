import React from "react";
import { Helmet } from "react-helmet-async";

import OrganizationInfo from "../../components/OrganizationInfo";

function Home() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <div>Hem</div>
      <OrganizationInfo />
    </>
  );
}

export default Home;
