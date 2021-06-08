import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
    
    return (
  <div>

    <h1 className="text-center text-5xl">ASCFCP</h1>
    <p className="text-center text-3xl">
    Anti Counterfeiting System for Clothing Products
    </p>

    <p align="center"><button id="qsLoginBtn" onClick={() => loginWithRedirect()}
  className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" type="button" >
Login </button></p>
    
<p className="text-center text-2xl">
    In Progress..
    </p>
  </div>
)
  }
export default Hero;
