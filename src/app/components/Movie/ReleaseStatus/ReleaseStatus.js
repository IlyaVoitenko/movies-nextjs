import React from "react";

const ReleaseStatus = ({ status, release_date }) => {
  return (
    <p className="ml-2">
      {status === "Released" ? `Released : ${release_date}` : "not released"}
    </p>
  );
};

export default ReleaseStatus;
