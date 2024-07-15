import React from "react";

const ReleaseStatus = ({ status, release_date }) => {
  return (
    <p className="ml-2">
      {status === "Released" ? (
        <span className="font-bold text-lg">Released : {release_date}</span>
      ) : (
        "not released"
      )}
    </p>
  );
};

export default ReleaseStatus;
