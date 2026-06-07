import React from "react";
import '../styles/form.css'

function MovieForm(){

    return(
        <div>
            <form className="form">
                <h2>Add a Movie</h2>
              <div className="name-genre">
                    <label htmlFor="movie">Movie : <input type="text" id="movie" placeholder="Enter Movie Title" /></label>
                    <label htmlFor="genre">Add a Movie:

                        <select name="genre" id="genre">
                            <option value="Action">Action</option>
                            <option value="Drama">Drama</option>
                            <option value="Animation">Animation</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                        </select>
                    </label>
              </div>
                
                <div className="url-status">
                    <label htmlFor="imageUrl">Image Url <input type="url" name="imageUrl" id="imageUrl" placeholder="Enter Image url" /></label>
                    <label htmlFor="status"> Choose Status :
                        <select name="status" id="status">
                            <option value="Completed">Completed</option>
                            <option value="Watched">Watched</option>
                            <option value="Ongoing">OnGoing</option>
                        </select>
                    </label>

                </div>

                <label htmlFor="description" id="desc"> Description
                    <textarea name="description" id="description"placeholder="Add Movie description"></textarea>
                </label>
                <div>
                    <button type="submit">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default AddMovies;