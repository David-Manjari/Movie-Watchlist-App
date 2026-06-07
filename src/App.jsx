import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MovieForm from "./components/AddMovieForm";
import MovieDetails from "./pages/MovieDetails";

import { getMovies, addMovie } from "./services/movieApi";

function App() {
  // form input state
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    posterUrl: "",
    status: "",
    rating: "",
    description: "",
  });

  // list of all movies from the backend
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  function handleChange(event) {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      movie.title !== "" &&
      movie.releaseYear !== "" &&
      movie.description !== "" &&
      movie.rating !== ""
    ) {
      addMovie(movie).then((data) => {
        setMovies([...movies, data]);
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
      alert("Fill in all the required fields");
    }
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
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;