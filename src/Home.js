




import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import './components/css/Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Testominals from './components/Testominals';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imag1 from './components/css/img/startup.png';
import LogoImage from  './components/css/img/logo.png';
import {motion,useAnimation} from 'framer-motion';

const Home=()=>{
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Update animation based on scroll position
    controls.start({
      x: scrollY > 100 ? 0 : '100%',
    });
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
const Wrapper=styled.section`


`;
const animationVariants = {
    hidden: { y: '100%' }, // Initially hidden below the viewport
  visible: { y: -70, transition: { duration: 1 } }, // Moves to y: 0 with a 1-second transition
  };
  const containerVariants = {
    initial: {  x:120 },
    animate: {  x:0, transition: { duration: 1 } },
  };
  const containerVariants1 = {
    initial: {  x:-100 },
    animate: {  x:0, transition: { duration: 1 } },
    exit: { x: 100, transition: { duration: 1 } }, // Add exit variant
  };
    return(


        <Wrapper>
        <div className='Home-section'> 
        <motion.div
        
         className='main-div'>
     <motion.div 
       initial="hidden"
      animate="visible"
      variants={animationVariants}
      // style={{ transform: `translateX(${scrollY}px)` }}
    
     className='content'>
     
     <h1 className='text-center'>  Welcome to Tesames</h1> 
   
    
     <p className='text-center'> Small Business Startup Starting a business and need help. We are here to advise and help you get started in your
      entrepreneurship. We are committed to providing our customers with the best possible service through constant innovation, 
      high-quality solutions, and responsiveness.</p>

     <div className='text-center' > <button className='btn' > Read More </button></div>
      </motion.div>
    </motion.div>
   
      <motion.div
       initial="initial"
      animate="animate"
      variants={containerVariants}
  
        className='container'>
      <div className='row'>

        <div className='col-lg-6 col-sm-12'>
        <h6 style={{color:'green', size:'0.5rem'}}> ASK ABOUT OUR CONTACT-FREE SUPPORT OPTIONS!</h6>
        <h3>WELCOME TO TESAMES</h3>
        <p>Our company is dedicated to shining
         light on small business startups suffering from an 
         unknown strategy plan and technology stack they need 
         to perform everyday tasks, our job is to be unemployed 
        while giving you the ability to move forward in a business plan/model that works.</p>
        <p>Tesames owes its existence to 
        the founder's passion for entrepreneurship
         and information technology. He developed a passion for
          IT at the age of 12. And after high school, he joined 
          the Marine Corp as a Tactical
         Data Network Specialist, which paved the way for him to 
         pursue an IT course in college.?</p>
         <div className='button-div'> <button className='btn'> About Tesames</button></div>
         </div>
        <div className='col-lg-6 col-sm-12'>
        <img src={imag1}  alt=" " /> 
        </div>
      </div> </motion.div>
  <div style={{backgroundColor:'#f8f9fa'}}>
      <motion.div 
      initial="initial"
      animate="animate"
       variants={containerVariants1}
      className='container mt-5 mb-5' >
      <div className='row mt-5'>

        <div className='col-lg-6 col-sm-12'>
        <h6 style={{color:'green', size:'0.5rem'}}> ASK ABOUT OUR CONTACT-FREE SUPPORT OPTIONS!</h6>
        <h3>WELCOME TO TESAMES</h3>
        <p>Our company is dedicated to shining
         light on small business startups suffering from an 
         unknown strategy plan and technology stack they need 
         to perform everyday tasks, our job is to be unemployed 
        while giving you the ability to move forward in a business plan/model that works.</p>
        <p>Tesames owes its existence to 
        the founder's passion for entrepreneurship
         and information technology. He developed a passion for
          IT at the age of 12. And after high school, he joined 
          the Marine Corp as a Tactical
         Data Network Specialist, which paved the way for him to 
         pursue an IT course in college.?</p>
         <div className='button-div'> <button className='btn'> About Tesames</button></div>
         </div>
        <div className='col-lg-6 col-sm-12'>
        <img  className='third-image' src={imag1}  alt=" " /> 
        </div>
      </div> </motion.div>


      <div className='container mt-5  last-container' >
      <div className='row mt-5'>
      <div className='col-lg-6 col-sm-12'>
        <img className='third-image' src={imag1}  alt=" " /> 
        </div>
        <div className='col-lg-6 col-sm-12'>
        <h6 style={{color:'green', size:'0.5rem'}}> ASK ABOUT OUR CONTACT-FREE SUPPORT OPTIONS!</h6>
        <h3>WELCOME TO TESAMES</h3>
        <p>Our company is dedicated to shining
         light on small business startups suffering from an 
         unknown strategy plan and technology stack they need 
         to perform everyday tasks, our job is to be unemployed 
        while giving you the ability to move forward in a business plan/model that works.</p>
        <p>Tesames owes its existence to 
        the founder's passion for entrepreneurship
         and information technology. He developed a passion for
          IT at the age of 12. And after high school, he joined 
          the Marine Corp as a Tactical
         Data Network Specialist, which paved the way for him to 
         pursue an IT course in college.?</p>
         <div className='button-div'> <button className='btn'> About Tesames</button></div>
         </div>
        
      </div> </div>
</div>

    <div className='logo-showing'> 
     <div className='container'> 
     <div className='row'> 
     <div className='col-lg-3 col-sm-6'>
    <motion.div
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0,transition: { duration: 1 } }}
      exit={{ opacity: 0, x: 100 ,transition: { duration: 1 }}}
     className='image-div'><img src={LogoImage} alt=""/></motion.div> 
     {/* <h2 style={{color:'green'}}>NEXT </h2> */}
     <div className='heading'><h2 style={{color:'green'}}>NEXT </h2></div>
     
     
      </div>
     <div className='col-lg-3 col-sm-6'>
     
     <motion.div 
     initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0,transition: { duration: 1 } }}
      exit={{ opacity: 0, x: 100 ,transition: { duration: 1 }}}
     className='image-div'><img src={LogoImage} alt=""/></motion.div> 
     <div className='heading'><h2 style={{color:'green'}}>GEN</h2></div>
      </div>
       
      
     <div className='col-lg-3 col-sm-6'> 
     <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0,transition: { duration: 1 } }}
      exit={{ opacity: 0, x: 100 ,transition: { duration: 1 }}}
     className='image-div'><img src={LogoImage} alt=""/></motion.div>
     <div className='heading'><h2 style={{color:'green'}}>Payment </h2></div>
     </div>
     <div className='col-lg-3 col-sm-6'> 
     <motion.div 
     initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0,transition: { duration: 1 } }}
      exit={{ opacity: 0, x: 100 ,transition: { duration: 1 }}}
    
     className='image-div'><img src={LogoImage} alt=""/></motion.div>
     <div className='heading'><h2 style={{color:'green'}}>METHODS</h2></div>
     </div>
     </div>
     </div>
     </div>

  <Testominals/>
     
      </div>
          </Wrapper>
    )
}

export default Home;