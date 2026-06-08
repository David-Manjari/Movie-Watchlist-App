import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie, onDeleteMovie, onUpdateStatus }) {
  const statusOptions = ["Want to Watch", "Watching", "Watched"];

  return (
    <article className="movie-card">
      <img
        src={movie.posterUrl || "https://placehold.co/300x400?text=No+Poster"}
        alt={movie.title}
      />
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>
          {movie.genre} • {movie.releaseYear}
        </p>
        <p>Rating: {movie.rating}/10</p>
        <p>Status: {movie.status}</p>
        <div className="movie-card-actions">
          <Link to={`/movies/${movie.id}`} className="details-link">
            View details
          </Link>
          <select
            value={movie.status}
            onChange={(e) => onUpdateStatus(movie.id, e.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button type="button" className="delete" onClick={() => onDeleteMovie(movie.id)}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;