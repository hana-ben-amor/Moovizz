import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Rating from 'react-rating';
function MovieCard({movie}) {

    return (
        <>
  
        <Card className="img" style={{width:250,margin:10,position:'relative'}}>
        <Card.Img   variant="top" src={movie.posterURL} style={{height:400}} />
        <Card.Body style={{textAlign:'center'}} >
          <Card.Title >{movie.title}</Card.Title>
          <Card.Text className='text' >
            <p style={{textAlign:"left"}}>{movie.title}</p>
            {movie.description}
          </Card.Text>
        
        </Card.Body>
       <Card.Footer style={{textAlign:'center'}}>
       <Rating style={{color:'yellow'}} initialRating={movie.rating}
           readonly />
       </Card.Footer>
      </Card>
 </>)
  }

export default MovieCard