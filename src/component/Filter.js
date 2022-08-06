import React from 'react'
import {Button,Form} from 'react-bootstrap'
function Filter(props) {
  return (
    <Form className="d-flex" style={{width:"30%",float:'right'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>props.handleFilter(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
   
  )
}

export default Filter