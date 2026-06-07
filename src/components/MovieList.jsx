import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{ padding: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;