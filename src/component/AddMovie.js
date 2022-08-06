import {Button,InputGroup,Modal,Form, FormGroup} from "react-bootstrap"
import {useState,useEffect} from 'react'

function AddMovie(props) {
     //update
    // useEffect(()=>{
    //     console.log("app was updated")
    // })

     //Mount 
    //  useEffect(()=>{
    //     console.log("app was updated")
    // },[])
    const [show,setShow]=useState(false);
    const [newMovie,setNewMovie]=useState({
        title:"",
        description:"",
        posterURL:"",
        rating:""
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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
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