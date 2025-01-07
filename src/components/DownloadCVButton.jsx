import React from "react";

export const DownloadCVButton = () => {
 // const urlCV = `https://drive.google.com/file/d/159CLtclIqmk7u7e0nfk17ZeqOKiCsHMe/view?usp=drive_link`;
  // const urlCV = `https://drive.google.com/file/d/1gJk1tVQrGSS5cmCUmDO9TmC_iE1TyVFs/view?usp=drive_link`;
  const urlCV = `https://drive.google.com/file/d/1m3tWdGbGFIr1336Ln9bst1fQPceo-aa8/view?usp=drivesdk`;
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
