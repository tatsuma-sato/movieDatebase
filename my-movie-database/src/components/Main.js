import React from 'react'

function Main() {

  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a49367dd215128e4eaab5f1c6a139f39"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error");
    });

  return (
    <div>
      
    </div>
  )
}

export default Main
