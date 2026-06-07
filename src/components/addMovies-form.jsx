import React from "react";
import '../styles/form.css'

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
                    <label htmlFor="genre">Add a Movie:

                        <select name="genre" id="genre" value={inputValue.genre} onChange={handleChange}>
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Animation">Animation</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                    </label>
              </div>
                
                <div className="url-status">
                    <label htmlFor="posterUrl">Image Url <input type="url" name="posterUrl" id="posterUrl" placeholder="Enter Poster url" 
                    value={inputValue.posterUrl}
                    onChange={handleChange}
                    /></label>
                    <label htmlFor="status"> Choose Status :
                        <select name="status" id="status" value={inputValue.status} onChange={handleChange}>
                            <option value="Completed">Completed</option>
                            <option value="Watched">Watched</option>
                            <option value="Ongoing">OnGoing</option>
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