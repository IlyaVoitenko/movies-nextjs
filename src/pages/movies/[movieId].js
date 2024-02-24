import React from "react";
import { getDetailMovie } from "../api/movies";
import Movie from "@/src/app/components/Movie";

export const getServerSideProps = async (context) => {
  try {
    const { movieId } = context.params;
    const response = await getDetailMovie(movieId);

    return {
      props: {
        movie: response,
      },
    };
  } catch (error) {
    throw Error("Error : ", error);
  }
};
const MoviePage = ({ movie }) => {
  return <Movie movie={movie} />;
};

export default MoviePage;
