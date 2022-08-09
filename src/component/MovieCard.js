import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from "react-stars";
import Rating from "react-rating";
import { Route, Routes,Link } from 'react-router-dom';
import DescriptionPage  from './descriptionPage';
function MovieCard({movie}) {
    return (
        <>
  
        <Card className="img" style={{width:250,margin:10,position:'relative'}}>
        <Card.Img   variant="top" src={movie.posterURL} style={{height:400}} />
        <Card.Body style={{textAlign:'center'}} >
          <Card.Title >{movie.title}</Card.Title>
          <Card.Text className='text' >
            <p style={{textAlign:"left"}}>{movie.title}
            {movie.rating} 
            </p>
            {movie.description}
          </Card.Text>
         
        </Card.Body>
       <Card.Footer style={{marginLeft:40}}>

       <ReactStars  
             count={5}
             value={movie.rating}
             size={30}
             activeColor="#ffd700"
             edit={false}
             />
     
       </Card.Footer>
       <p style={{textAlign:'center',borderColor:'green',backgroundColor:'green',fontSize:20,borderRadius:30}}>
       Rating:{movie.rating}/5
       </p>
    
    
      </Card>


  
 </>)
  }

export default MovieCard