import React from 'react'
import MovieCard from './MovieCard';
function MovieList({list}) {
  return (<>
        <div>
          
        <div style={{display:'flex',flexDirection:'row',flex:2,flexWrap:'wrap',padding:100,margin:100}}>
        {list.length ? list.map(elm =><MovieCard movie={elm} />):
        <div style={{marginLeft:360}}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width:100,height:80,color:'red'}} fill="currentColor" className="bi bi-heartbreak-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
        </svg>
          <h1>OUPSYYYY! </h1>
          <p>Movie not found ...</p>
        
        </div>}
        </div>

    </div>
  
  </>

  )
}

export default MovieList;