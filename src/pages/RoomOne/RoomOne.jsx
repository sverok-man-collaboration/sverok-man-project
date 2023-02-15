import React from "react";
import { Helmet } from "react-helmet-async";

import RoomNav from "../../components/RoomNav";
import DoorBackButton from "../../components/DoorBackButton";

function RoomOne() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>

      <DoorBackButton />
      <div>Rum 1</div>
      <RoomNav />
    </>
  );
}

export default RoomOne;
