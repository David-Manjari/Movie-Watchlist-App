import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MovieForm from "./components/AddMovieForm";
import MovieDetails from "./pages/MovieDetails";
import MovieList from "./components/MovieList";

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
    status: "",
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
          status: "",
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

    <div>

      <Routes>

        <Route
          path="/"
          element={
            <MovieForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              inputValue={movie}
            />
          }
        />

        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />

      </Routes>

      <MovieList
        movies={movies}
        onDeleteMovie={handleDeleteMovie}
        onUpdateStatus={handleUpdateStatus}
      />

    </div>
  );
}

export default App;