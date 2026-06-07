import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, updateMovieStatus } from "../services/movieApi";
import WatchStatus from "../components/WatchStatus";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then((data) => setMovie(data));
  }, [id]);

  function handleStatusChange(newStatus) {
    updateMovieStatus(id, newStatus).then((updatedMovie) =>
      setMovie(updatedMovie)
    );
  }

  if (!movie) {
    return <p>Loading movie...</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
      <p>{movie.description}</p>
      <WatchStatus status={movie.status} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default MovieDetails;
