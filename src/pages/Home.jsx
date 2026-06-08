import { Link } from "react-router-dom";

function Home({ movies }) {
  const totalMovies = movies.length;
  const watchedCount = movies.filter((movie) => movie.status === "Watched").length;
  const watchingCount = movies.filter((movie) => movie.status === "Watching").length;
  const queuedCount = movies.filter((movie) => movie.status === "Want to Watch").length;

  return (
    <section className="page-content home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Movie Watchlist</span>
          <h1>Discover, track, and organize your next watch.</h1>
          <p>
            Keep your movie collection polished with quick search, clean filters, and a modern watchlist experience.
          </p>
          <div className="hero-actions">
            <Link to="/search" className="button button-primary">
              Browse movies
            </Link>
            <Link to="/add" className="button button-soft">
              Add a movie
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <h3>{totalMovies}</h3>
            <p>Total movies</p>
          </div>
          <div className="stat-card">
            <h3>{watchingCount}</h3>
            <p>Currently watching</p>
          </div>
          <div className="stat-card">
            <h3>{watchedCount}</h3>
            <p>Already watched</p>
          </div>
          <div className="stat-card">
            <h3>{queuedCount}</h3>
            <p>Queued</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
