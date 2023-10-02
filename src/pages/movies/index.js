import Head from "next/head";
import { getListMovies } from "../api/movies";
import ListMovie from "@/src/app/components/ListMovie";

export const getStaticProps = async () => {
  const { results } = await getListMovies();
  if (!results) throw Error("Films not found ");
  return {
    props: {
      movies: results,
    },
  };
};

const Movies = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <ListMovie movies={movies} />
    </>
  );
};

export default Movies;
