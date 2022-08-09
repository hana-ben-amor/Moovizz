import React,{useState} from 'react'
import {Button,Form,ListGroup,FormGroup} from 'react-bootstrap';

import ReactStars from "react-stars";
function Filter(props) {

  return (
  
    <ListGroup as="ol" style={{width:250,float:'right'}}>
      <ListGroup.Item
                as="il"
                className="d-flex justify-content-between align-items-start" 
                >
                <Form className="d-flex" style={{width:500}}>
            <Form.Control
              type="search"
              placeholder="Filtre by title"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>props.handleFilter(e.target.value)}
            />
          </Form>
      </ListGroup.Item>
      <ListGroup.Item style={{float:'right',backgroundColor:'green'}}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
              
          <div  style={{marginLeft:'20%'}}>
            <small>Filter by rating </small>
          <ReactStars 
              count={5}
              size={30}
              activeColor="#ffd700"
              value={0}
              onChange={(event, newValue) => 
                props.handleFilterRating(event)
                }
              />
          
  
          </div>
      </ListGroup.Item>
    </ListGroup>
       
            
           
     

   
  )
}

export default Filter