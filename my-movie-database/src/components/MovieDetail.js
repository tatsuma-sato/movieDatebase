import React from 'react'

const BASE_URL = "https://image.tmdb.org/t/p"

const DEFALUT_URL = "../images/image-not-found.png"

function MovieDetail({movie}) {

  const posterImg = movie.poster_path === 'N/A' ? DEFALUT_URL : BASE_URL + movie.poster_path

  return (
    <div>
      
    </div>
  )
}

export default MovieDetail
