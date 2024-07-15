import Image from "next/image";
import LanguagesSupport from "./LanguagesSupport";
import ListGenres from "./ListGenres";
import ReleaseStatus from "./ReleaseStatus";
import Countries from "./Countries";
import Companies from "./Companies";
import Head from "next/head";

const Product = ({ product }) => {
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
  } = product || {};
  return (
    <>
      <Head>
        <title>{original_title}</title>
        <meta name="description" content={overview} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={original_title} />
        <meta property="og:description" content={overview} />
        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
      </Head>
      <section className=" h-[95vh]">
        <div className="flex">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            width={250}
            height={400}
          />
          <article className="flex justify-between flex-col">
            <strong className="ml-2">
              {" "}
              <span className="font-bold text-lg">Name :</span> {original_title}
            </strong>
            <ListGenres genres={genres} />
            <LanguagesSupport languages={spoken_languages} />
            <ReleaseStatus status={status} release_date={release_date} />
            <Countries countries={production_countries} />
            <Companies companies={production_companies} />
            <p className="ml-2">
              {" "}
              <span className="font-bold text-lg"> Description : </span>
              {overview}
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Product;
