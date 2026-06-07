function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}/5</p>
      <p>Status: {movie.status}</p>
    </div>
  );
}

export default MovieCard;