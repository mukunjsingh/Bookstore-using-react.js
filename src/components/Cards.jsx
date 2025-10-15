import React from 'react'
import { useState } from 'react';
import { LiaStarSolid } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cards = ({ title, author, price, category, image, rating, slug }) => {
  const [rating1, setrating] = useState(0);
  const [hovered, sethovered] = useState(false);
  

const navigate = useNavigate()
 


  return (
    

    <div className='flex lg:ml-[0.5vw]  '>
      <div className='lg:h-[57vh] h-[65vh] lg:w-[16.7vw] w-[70vw] bg-black rounded-[1.2vw] items-center flex justify-center relative '
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}

      >

        <div className={`text-[#6D5CD8] absolute lg:top-[1.5vw] top-[18vw] right-[2.5vw] bg-white px-[0.6vw] py-[0.5vw] rounded-[0.5vw] ${hovered ? "block" : "hidden"}`}>  <IoMdHeartEmpty /></div>

        <div className='lg:h-[39vh]  h-[55vh] lg:w-[14vw] w-[70vw] rounded-[1vw]  mb-[7.5vw] flex flex-col items-center'>
          <img className='h-full w-full object-cover rounded-[1vw]' src={image}></img>
          <h2 className='text-white text-[1.4vw] mt-[0.3vw] font-medium '>{title}</h2>

          <div className={`text-white text-[1.4vw] ${hovered ? "block" : "hidden"}`}>$ {price}</div>

          <button
            onClick={() =>  navigate(`/book/${slug}`)}
            className={`bg-[#6D5CD8] text-white text-[1vw] flex px-[0.8vw] py-[0.6vw] gap-[0.9vw] rounded-[0.6vw] mt-[0.7vw]  ${hovered ? "block" : "hidden"} cursor-pointer hover:bg-[#5842ec] `} ><AiOutlineShoppingCart className='mt-[0.3vw]'

            /> View</button>


          <h2 className={`text-white text-[1vw] ${hovered ? "hidden" : "block"} `}>By {author}</h2>
          <h3 className={`text-white text-[0.9vw]  ${hovered ? "hidden" : "block"} `}>{category}</h3>
          <div className={`text-gray-500 flex text-[1.9vw] mt-[0.5vw] gap-[0.25vw]  ${hovered ? "hidden" : "block"}`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <LiaStarSolid
                key={star}
                className={`${star <= rating ? "text-orange-500" : "text-gray-500"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards