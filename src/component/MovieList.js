import React from 'react'
import MovieCard from './MovieCard';
function MovieList(props) {
  return (<>
        <div>
          
        <div style={{display:'flex',flexDirection:'row',flex:2,flexWrap:'wrap',padding:10,margin:200}}>
        {props.list.length!==0 ? props.list.map(elm =><MovieCard movie={elm} />):props.movies.map(elm =><MovieCard movie={elm} />)
      
      }
        </div>

    </div>
  
  </>

  )
}

export default MovieList;