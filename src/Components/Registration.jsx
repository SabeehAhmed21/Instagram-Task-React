import React, { useState } from "react";
import { Alert,Row,Col } from "react-bootstrap";
import Login from "./Login";
import image from "../assests/images/im.jpg"
import Home from "../pages/Home/Home";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState("false");
  const [login, setLogin] = useState("true");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email|| !password|| ! phone){
        setFlag(true);

    }else{setFlag(false);
        localStorage.setItem('email',JSON.stringify(email));
        localStorage.setItem('password',JSON.stringify(password));
        console.log('saved in local storage');
        setLogin(!login);
    }
  }

  return (
   
    <>
     {login?(
      <Row className="w-100" style={{height:"100vh"}}>
        <Col md={8}>
<img src={image} alt="image" className="w-100 h-100"/>
        </Col>
        <Col md={4} className="mt-5">
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="">name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your full name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">phone no</label>
          <input
            type="phone"
            className="form-control"
            placeholder="enter your phone no"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </button>
        <p> Already Register {""}? login</p>
        {flag &&(
            <Alert color='primary' variant="danger"> please fill out all the fields</Alert>
            
        )}
      </form>
        </Col>
      </Row>
   
      ):(
      <Home/>
      )}
    </>
  );
}

export default Registration;
