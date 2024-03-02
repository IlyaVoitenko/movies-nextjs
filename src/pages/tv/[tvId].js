import React from "react";
import { getDetailTv } from "../api/tv";
import Product from "@/src/app/components/Product";

export const getServerSideProps = async (context) => {
  try {
    const { tvId } = context.params;
    const response = await getDetailTv(tvId);

    return {
      props: {
        movie: response,
      },
    };
  } catch (error) {
    throw Error("Error : ", error);
  }
};
const TvPage = ({ movie }) => {
  return <Product product={movie} />;
};

export default TvPage;
