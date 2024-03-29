import React from "react";
import { getDetailMovie } from "../api/movies";
import Product from "@/src/app/components/Product";

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
  return <Product product={movie} />;
};

export default MoviePage;
