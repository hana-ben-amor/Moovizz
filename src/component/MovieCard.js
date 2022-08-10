import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from "react-stars";
import {BrowserRouter,Route, Routes,Link,useParams } from 'react-router-dom';
import DescriptionPage  from './DescriptionPage';
function MovieCard({movie}) {
    return (
        <>

   <Link to={`/descriptionPage/${movie.id}`} style={{textDecoration:'none',color:'black'}} >
        <Card className="img" style={{width:250,margin:20,position:'relative'}} 
             >
        <Card.Img   variant="top" src={movie.posterURL} style={{height:400}} />
        <Card.Body style={{textAlign:'center'}} >
          <Card.Title >{movie.title}</Card.Title>
          <Card.Text className='text' >
            <p style={{textAlign:"left"}}>Overview 
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
      </Card>
      </Link>

 </>)
 
    }

export default MovieCard