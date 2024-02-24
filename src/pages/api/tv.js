import axios from "axios";

export const getTvList = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTE5MGY5NTBjZGM2MmQ0OTg5Zjc1MWRlMzRmZDcyMiIsInN1YiI6IjY1ZGExNzc0ZmNiOGNjMDE4NmNiYTM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP0fDpN1-3mp2zNGlCyTAR56A8ch3QTS-ce9SKxuGUA",
    },
  };
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    );
    console.log(data);
    return data;
  } catch (error) {
    throw Error("tv is undefined ");
  }
};
