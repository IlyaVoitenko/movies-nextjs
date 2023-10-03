import ItemMovie from "./ItemMovies";

const ListMovies = ({ movies }) => {
  return (
    <div className="flex justify-center  flex-row  flex-wrap ">
      {movies && movies.map((item) => <ItemMovie key={item.id} item={item} />)}
    </div>
  );
};

export default ListMovies;
