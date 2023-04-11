// import logo from './logo.svg';
import './App.css';
// import  Signin from "./pages/Auth/Signin"
// import Signup from './pages/Auth/Signup';
// import Image from './Components/Image';
 import Web from './Components/Web';

import { Routes, Route } from "react-router-dom"
import Registration from './Components/Registration';
import API from './Components/API';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={ <Registration/> } />
        <Route path="/webcam" element={ <Web/> } />
        {/* <Route path="/api" element={ <API/> } /> */}
        
       
      </Routes>
  
   
   
   {/* <Web/> */}
   </>
  );
}

export default App;
