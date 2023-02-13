import React from "react";
import DownloadGame from "./DownloadGame";

function CallToAction() {
  return (
    <>
      <div className="flex justify-center">
        <img src="" alt="Logotyp" />
        <h1 className="text-xl">Namn på spelet</h1>
      </div>
      <DownloadGame />
    </>
  );
}

export default CallToAction;
