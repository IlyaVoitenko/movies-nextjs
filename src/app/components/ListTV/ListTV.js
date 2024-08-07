import React from "react";
import ItemTV from "./ItemTV";

const ListTV = ({ tvList }) => {
  const { results } = tvList || null;

  return (
    <section className="flex items-center justify-center  container flex-wrap ">
      {results &&
        results.map((tvShow) => <ItemTV key={tvShow.id} tvShow={tvShow} />)}
    </section>
  );
};

export default ListTV;
