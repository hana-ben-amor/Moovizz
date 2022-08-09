import React from 'react'
function descriptionPage({movie}) {
  return (
    <div>
        <h1>TRAILER PAGE</h1>
        <iframe src={movie.trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
            {movie.description}
        </p>
        <button>Home</button>
    </div>
  )
}

export default descriptionPage