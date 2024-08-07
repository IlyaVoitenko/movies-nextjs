import axios from "axios";

export const getListMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDcyNzk0ZWYyY2YyMmFmNDYzZGNiZDVjMjZkZGU0MCIsIm5iZiI6MTcyMTA2MjIwMi42MTYyNTksInN1YiI6IjY2OTU1MmUyNjFkMzBjMzIzNjVhNGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHTSyMNOyPPVACFrRkNFrk7FypYFAJtqfWPMl0R33BM`,
    },
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
export const getDetailMovie = async (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDcyNzk0ZWYyY2YyMmFmNDYzZGNiZDVjMjZkZGU0MCIsIm5iZiI6MTcyMTA2MjIwMi42MTYyNTksInN1YiI6IjY2OTU1MmUyNjFkMzBjMzIzNjVhNGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHTSyMNOyPPVACFrRkNFrk7FypYFAJtqfWPMl0R33BM`,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
