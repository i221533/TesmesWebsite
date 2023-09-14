import React from 'react';
import styled from 'styled-components';


import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imag1 from './css/img/logo.png'
const Fotter=()=>{


const Wrapper=styled.section`

.conatiner{

    justify-content: center;
  align-items: center;
  display:flex;
}
.conatiner .row{
  
    justify-content: center;
  align-items: center;
  display:flex;
  
}
.conatiner .row img{
   width:170px;
    height:80px;
}
.conatiner .row .col-lg-3{

margin-left:40px;
width:300px;

}
.hr-div{
    margin-left:10%;
    width:80%;
}
.hr-div hr{
    size:40rem;
    color:red;
}
.customMargin{

    width:200px;
    margin-left:30px;
}
 p{

    margin-top:0;
    course:pointer;
     
}
 p:hover{

    color:blue;
   
}
`


    return(


<Wrapper> 
<div className='conatiner'>
<div className='row'> 
  <img src={imag1} alt=""/>

</div> 
</div>
<div className='hr-div'><hr/></div>
<div className='container'>
<div className='row'> 
   <div className='col-lg-3 col-sm-6  customMargin'>
    <h6> CONTENT</h6>
    <p>Sitemap</p>
    <p>About Us</p>
    <p>Our Core Values</p>
    <p>Newsletter</p>
   </div>
   <div className='col-lg-3 col-sm-6 customMargin'><h6> LINKS</h6>
   <p>Cookoes Policy</p>
   




    <p>Terms & Conditions</p>
    <p>Return</p>
    <p>Privacy</p>
   </div>
   <div className='col-lg-3  col-sm-6 customMargin'>
   <h6> CONTACT</h6>
   <p>Sitemap</p>
    <p>About Us</p>
    <p>Our Core Values</p>
    <p>Newsletter</p>
   </div>
   <div className='col-lg-3 col-sm-6 customMargin'><h6> OUR MISSION</h6>
   <p>We is committed to delivering a new level of automation 
   that will help organizations save time, money,
    and manpower resources.</p>
   </div>
</div>

</div>
</Wrapper>

    );


}
export default Fotter;