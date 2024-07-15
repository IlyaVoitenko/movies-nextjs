import axios from "axios";

export const getTvList = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDcyNzk0ZWYyY2YyMmFmNDYzZGNiZDVjMjZkZGU0MCIsIm5iZiI6MTcyMTA2MjIwMi42MTYyNTksInN1YiI6IjY2OTU1MmUyNjFkMzBjMzIzNjVhNGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHTSyMNOyPPVACFrRkNFrk7FypYFAJtqfWPMl0R33BM`,
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDcyNzk0ZWYyY2YyMmFmNDYzZGNiZDVjMjZkZGU0MCIsIm5iZiI6MTcyMTA2MjIwMi42MTYyNTksInN1YiI6IjY2OTU1MmUyNjFkMzBjMzIzNjVhNGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHTSyMNOyPPVACFrRkNFrk7FypYFAJtqfWPMl0R33BM`,
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
