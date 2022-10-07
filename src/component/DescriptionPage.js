import React from 'react'
import { Button,Container } from 'react-bootstrap';
import {Link,useParams } from 'react-router-dom'
import ReactStars from 'react-stars';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function DescriptionPage({movie}) {
 
  let {id}=useParams();
  
  let elm=movie.find((elm)=>elm.id===id);
  console.log()
  return (
    <div>
      <Link to={"/"}><Button style={{backgroundColor:'green',borderColor:'green'}}>
      Home
  </Button></Link> 
      <Container style={{padding:0,marginTop:50}}>
      <Row>
        <Col sm={8}>
          <iframe width="100%" height="500" src={elm.trailerLink} allow='autoplay' allowFullScreen></iframe>
          </Col>
         <Col sm={4}>
          <div style={{padding:50,backgroundColor:'black',marginRight:12,marginTop:12,height:500,borderRadius:30}}>
          <h1 style={{color:'green',textAlign:'center'}}>{elm.title}</h1>
          <p style={{textAlign:'center',margin:50,color:'white'}}>
          {elm.description}
         
            
          </p>
        <div style={{margin:90}}>
        <ReactStars  
             count={5}
             value={elm.rating}
             size={30}
             activeColor="#ffd700"
             edit={false}
             />
     
        </div>
       
            
            </div>
         </Col>
      </Row>
      {/* <Row>
        <Col sm>My name  is {elm.title}</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row> */}
    </Container>
        
 
    </div>
  )
}

export default DescriptionPage
