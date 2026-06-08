import MovieCard from "./MovieCard";

function MovieList({ movies, onDeleteMovie, onUpdateStatus }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} onUpdateStatus={onUpdateStatus} />
      ))}
    </div>
  );
}

export default MovieList;

