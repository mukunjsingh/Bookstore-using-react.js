import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMoon } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { useEffect } from 'react';
import Filter from "./filter/Filter";

import { useState } from 'react';
import BookSearch from './BookSearch';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setsearchTerm}) => {

  const drawer = useRef(null)
  const cateRef = useRef(null)
  const tl = useRef(null)
  const down = useRef(null)
  const navigation = useNavigate()


useEffect(() => {
  tl.current=gsap.timeline({paused:true});
   tl.current.to(drawer.current, {
     height: "30vh",     
     duration: 0.6,      
    ease: "power2.out"
   })
    .to(down.current,{
    rotate:180,
    duration:0.5,
    ease: 'power3.out'
   }, '<');
})

const openDrawer = () => tl.current.play();
const closeDrawer = () => tl.current.reverse();
   
  return (
    <div >
         <div className='fixed z-20 w-full lg:h-[6vw] h-[10vw] bg-black flex justify-between '>
        <div className='h-full flex ml-[2vw] lg:gap-[2vw] gap-[14vw] w-[23vw]'> <div className='h-full w-[18vw] flex items-center '><span className='text-white text-4xl  lg:text-[2.8vw] text-[6vw] '>SWAPB</span>
        <svg className='lg:h-[2.3vw] h-[5.8vw] lg:w-[2.3vw] w-[5.8vw] mt-[0.4vw]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.42598 18H20C19.9965 18.9296 19.9784 19.6228 19.8866 20.1706C19.7773 20.8228 19.5774 21.1682 19.2709 21.4142C18.9643 21.6602 18.5339 21.8206 17.7211 21.9083C16.8844 21.9986 15.7754 22 14.1854 22H9.75461C8.1646 22 7.05566 21.9986 6.21896 21.9083C5.40616 21.8206 4.97573 21.6602 4.66916 21.4142C4.36259 21.1682 4.16271 20.8228 4.05343 20.1706C4.04522 20.1216 4.03761 20.0714 4.03053 20.02C3.99045 19.7288 3.97041 19.5831 4.09696 19.2397C4.22351 18.8964 4.27837 18.8425 4.38811 18.7347C4.71351 18.4151 5.15982 18.1785 5.67321 18.0681C5.96352 18.0057 6.34236 18 7.42598 18Z" fill="#c2adad"></path> <path opacity="0.5" d="M4.72718 2.73332C5.03258 2.42535 5.46135 2.22456 6.27103 2.11478C7.10452 2.00177 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00177 17.729 2.11478C18.5387 2.22456 18.9674 2.42535 19.2728 2.73332C19.5782 3.0413 19.7773 3.47368 19.8862 4.2902C19.9982 5.13073 20 6.24474 20 7.84202L20 18H7.42598C6.34236 18 5.96352 18.0057 5.67321 18.0681C5.15982 18.1785 4.71351 18.4151 4.38811 18.7347C4.27837 18.8425 4.22351 18.8964 4.09696 19.2397C4.02435 19.4367 4 19.5687 4 19.7003V7.84202C4 6.24474 4.00176 5.13073 4.11382 4.2902C4.22268 3.47368 4.42179 3.0413 4.72718 2.73332Z" fill="#c2adad"></path> <path d="M7.31034 16.2303C7.32206 16.2303 7.33382 16.2303 7.34563 16.2303L20 16.2303V7.97673C20 6.34262 19.9982 5.20292 19.8862 4.34301C19.7773 3.50767 19.5782 3.06531 19.2728 2.75023C18.9674 2.43516 18.5387 2.22974 17.729 2.11743C16.8955 2.00181 15.7908 2 14.2069 2H9.7931C8.79138 2 7.98133 2.00073 7.31034 2.0305V16.2303Z" fill="#c2adad"></path> <path d="M5.65517 2.23958C5.2225 2.35863 4.9438 2.52695 4.72718 2.75044C4.42179 3.06551 4.22268 3.50787 4.11382 4.34322C4.00176 5.20313 4 6.34282 4 7.97693V17C4.38867 16.7198 4.82674 16.5065 5.29899 16.376C5.41296 16.3445 5.53103 16.3198 5.65517 16.3004V2.23958Z" fill="#c2adad"></path> </g></svg>
          <span className='text-white text-4xl lg:text-[2.8vw] text-[6vw]'>OK</span>
        </div>
          <div ref={cateRef} onMouseEnter={openDrawer}
          onMouseLeave={closeDrawer}
          
          
          className='h-full text-[1.3vw] text-white flex items-center relative'>
            <h2  className='flex items-center cursor-pointer py-[0.8vw] px-[0.9vw] rounded-[2.2vw] hover:bg-[#3D3D3D]  '>Categories <FaChevronDown ref={down}  className='h-[0.8vw] ml-[0.5vw]'/></h2>
             <div ref={drawer} className='h-[0vh] w-[10vw] bg-[#dbcaca] ml-[21.59vw] rounded-[1.5vw] absolute top-[5vw] right-0 z-20'></div>
          </div></div>

        <div className='h-full flex gap-[1vw] mr-[2vw]'> <div className='h-full  flex items-center '>
          
         <BookSearch setsearchTerm={setsearchTerm}/>
         
         
         {/* <button className='text-white outline-none w-[6vw] h-[2.8vw] border-blue-500 bg-[#1ABC9C] rounded-2xl px-[2vw] ml-[1.2vw] flex items-center justify-center  '>Find</button> */}
         </div>
          <div className='h-full w-[4vw] flex items-center justify-center'><HiMiniShoppingCart className='text-[#C2ADAD] h-[3vw] w-[2vw] cursor-pointer ' onClick={() => navigation('/cart')} /></div>
          <div className='h-full  flex items-center  ' ><div className='border-white h-[2.5vw] w-[2.5vw] border-1 px-[0.5vw] py-[0.5vw] rounded-[10px]  '><IoMoon className='text-white h-[1.3vw] w-[1.5vw] ' /></div></div>
        </div>
      </div>

     
     
    </div>
  )
}

export default Navbar