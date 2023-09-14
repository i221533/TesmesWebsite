import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoImage from './css/img/logo.png'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar=()=>

{

 const Wrapper=styled.nav`
 
 background-color: white;
 position: fixed;
    top: 0; /* Keep the navbar at the top of the viewport */
    width: 100%; /* Make the navbar full width */
    z-index: 1000;

  .navbar-brand img{
    width:100px;
    height:80px;
  }
 .navbar-nav{

  align:left;
  margin-left:70%;
 }
 `;

    return(
<>
<Wrapper>

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
        <img src={LogoImage} alt=''/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link active"  to="/">Contact</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active"  to="/">About</NavLink>
        </li>

      
      </ul>
     
    </div>
  </div>
</nav>
</Wrapper>
</>


    );
}

export default Navbar;