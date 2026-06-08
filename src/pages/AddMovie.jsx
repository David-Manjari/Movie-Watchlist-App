import MovieForm from "../components/AddMovieForm";

function AddMoviePage({ movie, handleChange, handleSubmit }) {
  return (
    <section className="page-content add-page">
      <div className="page-header">
        <small className="eyebrow">Add Movie</small>
        <h1>Keep your watchlist fresh with new titles.</h1>
        <p>Use the form below to add a new movie to your list and keep it organized.</p>
      </div>

      <div className="add-form-panel">
        <MovieForm handleChange={handleChange} handleSubmit={handleSubmit} inputValue={movie} />
      </div>
    </section>
  );
}

export default AddMoviePage;
