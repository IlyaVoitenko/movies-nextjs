import React from "react";
import Image from "next/image";

const ItemTV = ({ tvShow }) => {
  return (
    <section className="w-1/4 mt-4 mb-4">
      <article>
        <h3>{tvShow.name}</h3>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
          alt={`Post of ${tvShow.name}`}
          width={200}
          height={200}
        />
        <p>Vote average : {tvShow.vote_average}</p>
      </article>
    </section>
  );
};

export default ItemTV;
