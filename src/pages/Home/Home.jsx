import React, { useState } from 'react'
import Template from "../../../src/Components/Template"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import { RiDeleteBin2Line } from 'react-icons/ri';




const Home = () => {
   
    const [inputName, setName] = useState('');
    const [inputCity, setCity] = useState('');
    const [inputTitle, setTitle] = useState('');
    const [inputPost, setPost] = useState('');
    const [inputVisibility, setVisibility] = useState('');
    const [items1, setItems1] = useState([]);
   
    const addItem = () => {
        if (!inputName && !inputCity && !inputTitle && !inputPost) {
            alert("Enter Data to proceed");
           
        }
        else {
            setItems1([...items1, inputName]);
            
           setShow(false);
          
        }
    }
    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setVisibility(current => !current);
      };
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            
       <Container>
        <Row>
            <Col sm={12}>
            <h4>Wecome to Insta</h4>
            <h5>Lets Begin!</h5>
         
            </Col>
            
            <button  onClick={handleShow} className='w-25'>
        Click to Start!
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" value={inputName} onChange={(e) => setName(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="Enter city name" value={inputCity} onChange={(e) => setCity(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title of post" value={inputTitle} onChange={(e) => setTitle(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Post</Form.Label>
        <Form.Control type="email" placeholder="Enter post" value={inputPost} onChange={(e) => setPost(e.target.value)}/>
        
      </Form.Group>

     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
        By default post is public
        </Form.Text>
        <br/>
        <label htmlFor="subscribe" >
        <input
          type="checkbox"
          value={inputVisibility}
          onChange={handleChange}
          id="visible"
          name="visible"
          
        />
        Private
      </label>
      

      {inputVisibility && <p style={{fontSize:"0.8rem"}}>Your Post is  Private</p>}
      </Form.Group>
     
    </Form>
       
        </Modal.Body>
        <Modal.Footer>
          <br/>
          
          <button onClick={addItem}></button>
          <button  onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      {
  items1.map((elem,ind)=>{
      return(
          
              <div>
                <Template style={{position:"absolute"}} name={inputName} city={inputCity} title={inputTitle} post={inputPost} visible={inputVisibility}/>
             <div className='text-center'>
             <button onClick={handleShow}>Update</button>
              <button onClick={handleShow}>Delete</button>
             </div>
              

            
              </div>
              
      )
  })
}

        </Row>
       </Container>
        </>
     
    )
}

export default Home