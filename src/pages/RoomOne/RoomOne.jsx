import React from "react";
import { Helmet } from "react-helmet-async";

import RoomNav from "../../components/RoomNav";

function RoomOne() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <div>Rum 1</div>
      <RoomNav />
    </>
  );
}

export default RoomOne;
