import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddMoviePage from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";

import {
  getMovies,
  addMovie,
  deleteMovie,
  updateMovieStatus,
} from "./services/movieApi";

function App() {

  // form state
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    posterUrl: "",
    status: "Want to Watch",
    rating: "",
    description: "",
  });

  // movies list
  const [movies, setMovies] = useState([]);

  // fetch movies
  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  // form input changes
  function handleChange(event) {

    setMovie({
      ...movie,
      [event.target.name]: event.target.value,
    });
  }

  // add movie
  function handleSubmit(event) {

    event.preventDefault();

    if (
      movie.title !== "" &&
      movie.releaseYear !== "" &&
      movie.description !== "" &&
      movie.rating !== ""
    ) {

      addMovie(movie).then((data) => {

        setMovies((prev) => [...prev, data]);

        setMovie({
          title: "",
          genre: "",
          releaseYear: "",
          posterUrl: "",
          status: "Want to Watch",
          rating: "",
          description: "",
        });
      });

    } else {

      alert("Fill in all required fields");

    }
  }

  // delete movie
  function handleDeleteMovie(id) {

    deleteMovie(id).then(() => {

      setMovies((prev) =>
        prev.filter((movie) => movie.id !== id)
      );

    });
  }

  // update status
  function handleUpdateStatus(id, status) {

    updateMovieStatus(id, status).then((updatedMovie) => {

      setMovies((prev) =>
        prev.map((movie) =>
          movie.id === id ? updatedMovie : movie
        )
      );

    });
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/search"
            element={
              <Search
                movies={movies}
                onDeleteMovie={handleDeleteMovie}
                onUpdateStatus={handleUpdateStatus}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddMoviePage
                movie={movie}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route
            path="*"
            element={
              <section className="page-content not-found-page">
                <h2>Page not found</h2>
                <p>The page you are looking for does not exist.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;