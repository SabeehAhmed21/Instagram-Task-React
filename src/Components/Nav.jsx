import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import Web from './Web';

function ColorSchemesExample() {
  
  return (
    <>
      <Navbar style={{backgroundColor: "crimson"}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="ms-auto">
            {/* <Nav.Link href={<Web/>} >Capture Image</Nav.Link> */}
            <Nav.Link href="#features">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
     
    </>
  );
}

export default ColorSchemesExample;