import React from "react";

const Countries = ({ countries }) => {
  return (
    <span className="ml-2">
      <span className="font-bold text-lg">Countries :</span>

      {countries.map(({ name }, index) => (
        <span key={index} className="ml-2">
          {name}
        </span>
      ))}
    </span>
  );
};

export default Countries;
