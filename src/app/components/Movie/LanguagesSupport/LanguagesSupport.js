import React from "react";

const LanguagesSupport = ({ languages }) => {
  return (
    <p className="ml-2">
      languages :
      {languages.map(({ english_name }, index) => (
        <span key={index} className="ml-2">
          {english_name}
        </span>
      ))}
    </p>
  );
};

export default LanguagesSupport;
