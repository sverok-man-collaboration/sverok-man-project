import React from "react";
import { BsDownload } from "react-icons/bs";

function DownloadGame() {
  return (
    <div className="flex justify-center">
      <button className="bg-accent text-white hover:bg-accentHover m-4 rounded-full text-lg px-6 py-2">
        <a href="" download="Namn_på_spel.exe" className="flex items-center">
          Ladda ner <BsDownload className="ml-2" />
        </a>
      </button>
    </div>
  );
}

export default DownloadGame;
