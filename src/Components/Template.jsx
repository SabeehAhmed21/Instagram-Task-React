import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Image from './Image';
import { Link } from "react-router-dom";
import Web from "./Web"
import { BsPencil } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { RiDeleteBin2Line } from 'react-icons/ri';


export default function EditButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post </Modal.Title>
        </Modal.Header>
      <Modal.Body>
<Web/>
      </Modal.Body>
        <Modal.Footer>
          <br/>
         
          <button  onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    
    <div className="gradient-custom-2" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7" style={{position:"relative"}}>
            <MDBCard>
             
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="light" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{props.name}</MDBTypography>
                  <MDBCardText>{props.city}</MDBCardText>
                  

                 
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0"></MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">{props.title}</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{props.post}</MDBCardText>
                    <div>A descriptive word is a word used to give details and more information. Examples of descriptive words include colors, sizes, shapes, textures, and numbers, to name a few!</div>
                   
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  
                </div>
                
                <MDBRow className="g-2">
                  <MDBCol className="mb-2 d-flex align-items-center justify-content-between">
                    <Image/>
                    <MDBCardText className="mb-0">  <button className="fst-italic w-100 bg-white text-danger"  onClick={handleShow} >
        Take Photo
      </button></MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}