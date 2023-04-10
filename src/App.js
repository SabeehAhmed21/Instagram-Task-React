// import logo from './logo.svg';
import './App.css';
// import  Signin from "./pages/Auth/Signin"
// import Signup from './pages/Auth/Signup';
import Home from './pages/Home/Home';
// import Image from './Components/Image';
 import Web from './Components/Web';
import Navbar from "./Components/Nav"
import { Routes, Route } from "react-router-dom"
import Registration from './Components/Registration';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={ <Registration/> } />
        <Route path="/webcam" element={ <Web/> } />
       
      </Routes>
  
   
   
   {/* <Web/> */}
   </>
  );
}

export default App;
