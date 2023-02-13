import React from "react";
import { Helmet } from "react-helmet-async";

import RoomNav from "../../components/RoomNav";

function RoomThree() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <div>Rum 3</div>
      <RoomNav />
    </>
  );
}

export default RoomThree;
