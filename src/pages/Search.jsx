import { useMemo, useState } from "react";
import MovieFilter from "../components/MovieFilter";
import MovieList from "../components/MovieList";

function Search({ movies, onDeleteMovie, onUpdateStatus }) {
  const [filters, setFilters] = useState({
    status: "All",
    genre: "All",
    query: "",
  });

  const availableGenres = useMemo(
    () => ["All", ...Array.from(new Set(movies.map((item) => item.genre)))],
    [movies]
  );

  const filteredMovies = useMemo(
    () =>
      movies.filter((item) => {
        const matchesStatus = filters.status === "All" || item.status === filters.status;
        const matchesGenre = filters.genre === "All" || item.genre === filters.genre;
        const matchesQuery = item.title.toLowerCase().includes(filters.query.trim().toLowerCase());
        return matchesStatus && matchesGenre && matchesQuery;
      }),
    [movies, filters]
  );

  return (
    <section className="page-content search-page">
      <div className="page-header">
        <small className="eyebrow">Search</small>
        <h1>Find the perfect movie for your next watch.</h1>
        <p>Filter by title, genre, and watch status to instantly refine your watchlist.</p>
      </div>

      <MovieFilter filters={filters} availableGenres={availableGenres} onFilterChange={setFilters} />

      {filteredMovies.length > 0 ? (
        <MovieList movies={filteredMovies} onDeleteMovie={onDeleteMovie} onUpdateStatus={onUpdateStatus} />
      ) : (
        <div className="empty-state">
          <h3>No matching movies found</h3>
          <p>Try broadening your filter or searching with a different title.</p>
        </div>
      )}
    </section>
  );
}

export default Search;
