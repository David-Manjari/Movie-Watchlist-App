import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import { initialMovies } from "../data/movies";

function Home() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Movie Watchlist</h1>

        {/* TASK 2 HAPPENS HERE */}
        <MovieList movies={initialMovies} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
