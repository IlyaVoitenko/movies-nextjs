import Image from "next/image";
import LanguagesSupport from "./LanguagesSupport";
import ListGenres from "./ListGenres";
import ReleaseStatus from "./ReleaseStatus";
import Countries from "./Countries";
import Companies from "./Companies";

const Movie = ({ movie }) => {
  console.log(movie);
  const {
    poster_path,
    original_title,
    production_countries,
    production_companies,
    overview,
    genres,
    spoken_languages,
    release_date,
    status,
  } = movie || {};
  return (
    <div className=" h-[95vh]">
      <div className="flex">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
          width={250}
          height={400}
        />
        <article className="flex flex-col">
          <strong className="ml-2">name : {original_title}</strong>
          <ListGenres genres={genres} />
          <p className="ml-2">description : {overview}</p>
          <LanguagesSupport languages={spoken_languages} />
          <ReleaseStatus status={status} release_date={release_date} />
          <Countries countries={production_countries} />
          <Companies companies={production_companies} />
        </article>
      </div>
    </div>
  );
};

export default Movie;
