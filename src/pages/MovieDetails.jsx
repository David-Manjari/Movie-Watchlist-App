import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    return <p className="loading-text">Loading movie...</p>;
  }

  return (
    <section className="page-content movie-details-page">
      <div className="detail-card">
        <div className="detail-media">
          <img src={movie.posterUrl} alt={movie.title} />
        </div>
        <div className="detail-content">
          <Link to="/search" className="button button-soft back-link">
            ← Back to search
          </Link>
          <h2>{movie.title}</h2>
          <div className="detail-meta">
            <span>{movie.genre}</span>
            <span>{movie.releaseYear}</span>
            <span>Rating: {movie.rating}/10</span>
          </div>
          <p>{movie.description}</p>
          <WatchStatus status={movie.status} onStatusChange={handleStatusChange} />
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
