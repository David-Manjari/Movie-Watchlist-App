import MovieCard from "./MovieCard";

function MovieList({ movies , onDeleteMovie, onUpdateStatus}) {
  return (
    <div style={{ padding: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  );
}

export default MovieList;

