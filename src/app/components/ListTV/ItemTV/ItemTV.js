import React from "react";
import Image from "next/image";
import Link from "next/link";

const ItemTV = ({ tvShow }) => {
  const { id, name, poster_path, vote_average } = tvShow;
  return (
    <Link href={`/tv/${id}`}>
      <div className="w-full  m-3">
        <article className="flex flex-col items-center ">
          <h3 className="hyphens-auto">{name}</h3>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Post of ${name}`}
            width={200}
            height={200}
          />
          <p>Vote average : {vote_average}</p>
        </article>
      </div>
    </Link>
  );
};

export default ItemTV;
