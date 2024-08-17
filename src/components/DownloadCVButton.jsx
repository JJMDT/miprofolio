import React from "react";

export const DownloadCVButton = () => {
  const urlCV = `https://drive.google.com/file/d/159CLtclIqmk7u7e0nfk17ZeqOKiCsHMe/view?usp=drive_link`;
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
