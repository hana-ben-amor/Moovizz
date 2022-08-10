import {Button,Modal,Form} from "react-bootstrap"
import {useState,useEffect} from 'react'
import { useId } from "react";

function AddMovie(props) {
  
    useEffect(()=>{
        console.log("app was updated")
    })

     //Mount 
    //  useEffect(()=>{
    //     console.log("app was updated")
    // },[])
    const [show,setShow]=useState(false);
    const [newMovie,setNewMovie]=useState({
      id:useId(),
        title:"",
        description:"",
        posterURL:"",
        rating:0,
        trailerLink:""
    }
    )
    const handleClose = () => setShow(false);
    const handleSave = ()=>{
        props.handleAddMovie(newMovie)
        handleClose()

    }
    const handleShow = () => setShow(true);
    const handleChange=(e)=>setNewMovie({...newMovie,[e.target.name]:e.target.value})
   

  return (
    <>
  
    <Button variant="primary" style={{backgroundColor:"green",border:'green'}} onClick={handleShow}>
              Add Movie
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                    name="title"
                      type="text"
                      placeholder="title of th movie"
                      autoFocus
                      onChange={handleChange}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Description</Form.Label>
                    <Form.Control
                    name="description"
                      type="text"
                      placeholder="description of the movie"
                      autoFocus
                      onChange={handleChange}
                    />
                        <Form.Label>Trailer Link </Form.Label>
                    <Form.Control
                    name="trailerLink"
                      type="text"
                      placeholder="Trailer of the movie"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="basic-url">Poster URL</Form.Label>
                    <Form.Control
                     type='text' onChange={handleChange} name="posterURL"
                      autoFocus
                     placeholder="URL"
                    />
                    </Form.Group>
                   

                  <Form.Select aria-label="Floating label select example" value={newMovie.rating} onChange={handleChange} name="rating">
                  <option >Rating</option>
                  <option key={0} value="1">1</option>
                  <option key={1} value="2">2</option>
                  <option key={2} value="2">3</option>
                  <option key={3} value="3">4</option>
                  <option key={4} value="5">5</option>

                  </Form.Select>
               
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            </>
       
  )
}

export default AddMovie