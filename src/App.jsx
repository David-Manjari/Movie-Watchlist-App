import React, { useEffect, useState } from "react";
import MovieForm from "./components/addMovies-form";

import { getMovies } from "./services/movieApi";
import { addMovie } from "./services/movieApi";
function App(){

  // code to get content from the form
  const [movie, setMovie] = useState({
    "title": "","genre": "",
    "releaseYear": "", "posterUrl":"",
    "status": "","rating": "",
    "description":"",
})

    function handleChange(event){
      setMovie({...movie, [event.target.name]:event.target.value})
    }

    const [update, setUpdade] = useState([])
    useEffect(() =>{
      getMovies()
      .then((data) =>{
        setUpdade(data)
      })
    },[])

    // code to handle submit and post changes to the api
      function handleSubmit(event){
        event.preventDefault();
        // condition to check all inputs are filled
        (movie.title !== "" && movie.releaseYear !== "" &&
          movie.description !== "" && movie.rating !== ""
        )? (
          addMovie(movie)
            .then((data) => {
              setUpdade([...update, data])
            })
        // code to update the parameters for forms
              (setMovie({
                "title": "", "genre": "Action",
                "releaseYear": "", "posterUrl": "",
                "status": "Completed", "rating": "",
                "description": "",
              }))
        ): alert("Fill in all the required fields ")
      }
  return(
    <div>
      <MovieForm handleChange ={handleChange} handleSubmit={handleSubmit} inputValue = {movie}/>
    </div>
  )
}

export default App;