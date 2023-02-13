import React from "react";
import { Helmet } from "react-helmet-async";

import RoomNav from "../../components/RoomNav";

function RoomTwo() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>
      <div>Rum 2</div>
      <RoomNav />
    </>
  );
}

export default RoomTwo;
