import React from "react";

export const DownloadCVButton = () => {
  //const urlCV = `https://drive.google.com/file/d/1m3tWdGbGFIr1336Ln9bst1fQPceo-aa8/view?usp=drivesdk`;
  const urlCV = `https://drive.google.com/file/d/1JQ7yvw0aBDvXo89cslBaXHnIpcPcFceq/view?usp=drive_link`;
  return (
      <a
        href={urlCV}
        download="CV Juan Jose La Terra"
        className="btn btn-primary"
        target="_blank"
        
      >
        Descargar CV
      </a>
  );
};
