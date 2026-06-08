import React from "react";

function MovieForm({handleChange,handleSubmit,inputValue}){

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Add a Movie</h2>
              <div className="name-genre">
                    <label htmlFor="movie">Movie : 
                        <input type="text" name ="title" id="movie" placeholder="Enter Movie Title" 
                        value={inputValue.title}
                        onChange={handleChange}
                        /></label>
                    <label htmlFor="genre">Genre:

                        <select name="genre" id="genre" value={inputValue.genre} onChange={handleChange}>
                            <option value="">Select genre</option>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Animation">Animation</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                    </label>
              </div>
              <div id="rate-year">
                    <label htmlFor="releaseYear">Release Year :
                        <input type="text" name="releaseYear" id="releaseYear" placeholder="Enter Year Released" value={inputValue.releaseYear} onChange={handleChange}/>
                    </label>
                    <label htmlFor="rating">Ratings :
                        <input type="number" name="rating" id="rating" placeholder="Rate Movie" value={inputValue.rating} onChange={handleChange} />
                    </label>

              </div>
                
                <div className="url-status">
                    <label htmlFor="posterUrl">Image Url <input type="url" name="posterUrl" id="posterUrl" placeholder="Enter Poster url" 
                    value={inputValue.posterUrl}
                    onChange={handleChange}
                    /></label>
                    <label htmlFor="status"> Choose Status :
                        <select name="status" id="status" value={inputValue.status} onChange={handleChange}>
                            <option value="">Select status</option>
                            <option value="Want to Watch">Want to Watch</option>
                            <option value="Watching">Watching</option>
                            <option value="Watched">Watched</option>
                        </select>
                    </label>

                </div>

                <label htmlFor="description" id="desc"> Description
                    <textarea name="description" id="description"placeholder="Add Movie description"
                    value={inputValue.description}
                    onChange={handleChange}
                    ></textarea>
                </label>
                <div>
                    <button type="submit">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;