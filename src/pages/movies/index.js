import Head from "next/head";
import { getListMovies } from "../api/movies";
import ListMovies from "@/src/app/components/ListMovies";

export const getStaticProps = async () => {
  const { results } = await getListMovies();
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
      <ListMovies movies={movies} />
    </>
  );
};

export default Movies;
