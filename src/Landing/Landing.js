import React from 'react'
import './Landing.css';
import moon from './image/moon.jpg';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

import {BsArrowDownCircle} from 'react-icons/bs';
const Landing = () => {
    return (
        <>
            <div class="contain">
                <img class="bg-image " src={moon} />
                <div className='mt-5'>
                    <p className=' position-absolute top-50 start-50  bottom-0  translate-middle  text-light  massive mt-4 fs-1'>THIS IS</p>
                    <p className=' position-absolute top-50 start-50  bottom-0   translate-middle text-light  massive fs-1' style={{ marginTop: "3rem" }}>MASSIVELY</p>
                </div>
                <div>
                    <p className='position-absolute top-50 start-50  translate-middle  text-light   mt-2  fs-5 fw-light '>A fully responsive HTML5 + CSS3 site templated designed by binish and she owns it noone else does and i have nothing to say </p>
                </div>
                <br/>
                <div className=''>
                 <p className=' position-absolute top-50 start-50  bottom-50 translate-middle  text-light  fs-1 mt-5'><BsArrowDownCircle /></p>   
                </div>
            </div>
            <footer class="mt-3">
            <div class="container  position-absolute top-100 start-50 translate-middle py-5 ps-2 pe-2 w-75 h-auto ">
  
  <div class="d-flex flex-row bg-dark bg-opacity-75 w-75 mb-3 mx-auto p-0">
    <div class="p-2  bg-light text-center text-dark footer-flex">THIS IS MASSIVELY</div>
    <div class="p-2   text-center  text-light footer-flex">GENERIC PAGE</div>
    <div class="p-2 me-5 pe-5 text-center text-light footer-flex ">ELEMENTS REFERENCE</div>
  
    <div class="d-flex mx-5 me-5  ps-5 pe-1 justify-content-end"> 
   
    <div class="p-2 "><BsTwitter className='text-light mb-4 ' size={20}/></div>
    <div class="p-2 "><FaFacebookF  className='text-light mb-4 ' size={20}/></div>
    <div class="p-2 "><AiOutlineInstagram className='text-light mb-4  ' size={22} /></div>
    <div class="p-2  "><AiFillGithub
      className='text-light mb-4 ' size={22}/></div>
  
   
  </div>
  </div>
  
  </div>
            </footer>



        </>
    )
}

export default Landing
