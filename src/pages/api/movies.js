import axios from "axios";

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
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
