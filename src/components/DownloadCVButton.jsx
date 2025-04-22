import React from "react";

export const DownloadCVButton = () => {
  //const urlCV = `https://drive.google.com/file/d/1JQ7yvw0aBDvXo89cslBaXHnIpcPcFceq/view?usp=drive_link`;
  const urlCV = `https://drive.google.com/file/d/1ikKoxSTQzGSrpYg-OlAWVZHiIvsZBWcW/view?usp=drive_link`;
  return (
      <a
        href={urlCV}
        download="CV Juan José La Terra"
        className="btn btn-primary"
        target="_blank"
        
      >
        Descargar CV
      </a>
  );
};
