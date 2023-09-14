

import React from "react";
import styled from 'styled-components';
import pic1 from './css/img/testimonials/1.png'
import pic2 from './css/img/testimonials/review1.png'
import pic3 from './css/img/testimonials/review2.png'
const Testominals=()=>{


const Wrapper=styled.section`

.Testominals_section{
background-color:#f8f9fa;
}
.upper-heading{

    justify-content: center;
  align-items: center;
  display:flex;
}
.row{

    justify-content: center;
  align-items: center;
  display:flex;
}
.custom-class{
   background-color:white;
  width:320px;
  margin-bottom:50px;
  margin-top:30px;
  margin-right:20px;
  margin-left:20px;
}
.test-text{
   
    justify-content: center;
  align-items: center;
  display:flex;
  margin-top:50px;

}

.custom-class .Test-Image{
    margin-top:50px;
    justify-content: center;
  align-items: center;
  display:flex;
  border-radius:50%;
 
margin-bottom:50px;

}
.Test-Image1{
    margin-top:50px;
    justify-content: center;
  align-items: center;
  display:flex;
  border-radius:50%;
 
margin-bottom:50px;

}
.Test-Image img{

    width:100px;
    height:100px;
}
.Test-Image1 img{

width:100px;
height:100px;
border-radius:50%;
}
`;
    return(
<Wrapper>
<div className='Testominals_section'>
       <div className='upper-heading'>
       <h2> TESTIMONIALS</h2></div>
       <div className='upper-heading'>
       <p>We are grateful for all of our customers.
        We couldn't do business without you!
         Thanks so much for your feedback.</p> 
</div>
      
       {/* <div className='lower-hr'> <hr/></div> */}
      <div className='container'>
      <div className='row'>
      <div className='col-lg-4 col-sm-6 custom-class'>
      <div className="test-text">
       <p> Awesome Service! <br/>
                My affiliation with Geek has only lasted a few months but I 
                can tell we are bound to see
                 each other more often than I had anticipated. 
                 Their services are amazing!.</p></div>
                 <div className="Test-Image"> <img src={pic1} alt=""/> </div>
                 </div>

      <div className='col-lg-4 col-sm-6 custom-class'> <div className="test-text">
       <p> Awesome Service! <br/>
                My affiliation with Geek has only lasted a few months but I 
                can tell we are bound to see
                 each other more often than I had anticipated. 
                 Their services are amazing!.</p></div>
                 <div className="Test-Image1"> <img src={pic2} alt=""/> </div>
                 </div>
      <div className='col-lg-4 col-sm-6 custom-class'> <div className="test-text">
       <p> Awesome Service! <br/>
                My affiliation with Geek has only lasted a few months but I 
                can tell we are bound to see
                 each other more often than I had anticipated. 
                 Their services are amazing!.</p></div>
                 <div className="Test-Image1"> <img src={pic3} alt=""/> </div>
                 </div> 
       </div> </div>
      
      
      </div>
      </Wrapper>


    );
}

export default Testominals;