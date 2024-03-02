import axios from "axios";

export const getTvList = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_ACCESS_TOKEN}`,
    },
  };
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    );
    return data;
  } catch (error) {
    throw Error("tv list is undefined ", error);
  }
};
export const getDetailTv = async (tvId) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_ACCESS_TOKEN}`,
    },
  };
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    throw Error("tv details is undefined ", error);
  }
};
