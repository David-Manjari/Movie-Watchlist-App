import React from "react";

function MovieFilter({ filters, availableGenres, onFilterChange }) {
  return (
    <section className="movie-filter">
      <div className="filter-grid">
        <label className="filter-field">
          <span>Search</span>
          <input
            type="text"
            name="query"
            value={filters.query}
            placeholder="Search by title"
            onChange={(e) => onFilterChange({ ...filters, query: e.target.value })}
          />
        </label>
        <label className="filter-field">
          <span>Status</span>
          <select
            name="status"
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
          >
            <option value="All">All statuses</option>
            <option value="Want to Watch">Want to Watch</option>
            <option value="Watching">Watching</option>
            <option value="Watched">Watched</option>
          </select>
        </label>
        <label className="filter-field">
          <span>Genre</span>
          <select
            name="genre"
            value={filters.genre}
            onChange={(e) => onFilterChange({ ...filters, genre: e.target.value })}
          >
            {availableGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}

export default MovieFilter;
