import React from "react";
import { Link } from "react-router-dom";

function DoorBackButton() {
  return (
    <div>
      <button>
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
}

export default DoorBackButton;
