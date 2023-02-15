import React from "react";
import { Helmet } from "react-helmet-async";

import DoorBackButton from "../../components/DoorBackButton";
import RoomNav from "../../components/RoomNav";

function RoomThree() {
  return (
    <>
      <Helmet>
        <title>Beskrivande text</title>
      </Helmet>

      <DoorBackButton />
      <div>Rum 3</div>
      <RoomNav />
    </>
  );
}

export default RoomThree;
