import React from "react";

const ListGenres = ({ genres }) => {
  return (
    <span className="ml-2">
      <span className="font-bold text-lg">Genres :</span>
      {genres.map(({ id, name }) => (
        <span key={id} className="ml-2">
          {name}
        </span>
      ))}
    </span>
  );
};

export default ListGenres;
