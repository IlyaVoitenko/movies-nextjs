import React from "react";
import ItemTV from "./ItemTV";

const ListTV = ({ tvList }) => {
  console.log(tvList);
  const { results } = tvList || null;
  console.log(results);

  return (
    <section className="flex container flex-wrap ">
      {results &&
        results.map((tvShow) => <ItemTV key={tvShow.id} tvShow={tvShow} />)}
    </section>
  );
};

export default ListTV;
