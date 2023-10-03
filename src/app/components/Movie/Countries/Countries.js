import React from "react";

const Countries = ({ countries }) => {
  return (
    <span className="ml-2">
      countries :
      {countries.map(({ name }, index) => (
        <span key={index} className="ml-2">
          {name}
        </span>
      ))}
    </span>
  );
};

export default Countries;
