import React, { useEffect, useState } from "react";
import AddMovies from "./components/addMovies-form";

import { getMovies } from "./services/movieApi";
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

    const [update, setUpdade] = useState([])
    useEffect(() =>{
      getMovies()
      .then((data) =>{
        setUpdade(data)
      })
    },[])

  return(
    <div>
      <AddMovies/>
    </div>
  )
}

export default App;