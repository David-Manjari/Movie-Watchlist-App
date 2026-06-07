import React, { useState } from "react";
import AddMovies from "./components/addMovies-form";


function App(){

  // code to get content from the form
  const [movie, setMovie] = useState({
    "title": "","genre": "",
    "releaseYear": "", "posterUrl":"",
    "status": "","rating": "",
    "description":"",
})

    function handleSubmit(event){
      setMovie({...movie, [event.target.name]:event.target.value})
    }
    
  return(
    <div>
      <AddMovies/>
    </div>
  )
}

export default App;