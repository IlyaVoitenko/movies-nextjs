import Image from "next/image";
import Link from "next/link";

const ItemMovie = ({ item }) => {
  const { id, poster_path, original_title, overview } = item;
  return (
    <Link href={`/movies/${id}`} className={" w-1/4 m-3"}>
      <div className="flex flex-col items-center w-full ">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
          width={250}
          height={400}
        />
        <p>{original_title}</p>
        <span>{overview}</span>
      </div>
    </Link>
  );
};

export default ItemMovie;
