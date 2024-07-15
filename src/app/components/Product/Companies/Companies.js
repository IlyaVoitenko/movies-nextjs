import React from "react";
import Image from "next/image";

const Companies = ({ companies }) => {
  return (
    <div className="ml-2 flex flex-row ">
      <span className="font-bold text-lg">Companies : </span>

      {companies.map(({ name, id }) => (
        <span key={id} className="ml-2">
          {name}
        </span>
      ))}
    </div>
  );
};

export default Companies;
