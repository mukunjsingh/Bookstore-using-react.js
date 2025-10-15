import React from 'react'
import { useParams } from "react-router-dom";


const Card2 = ({image,title,category,language,price,author}) => {
      

    
    return (
        <div className='border-t-2 border-black flex mb-[2vw]'>

            <img className='h-[12vw] w-[14vw] object-contain mt-[1.5vw] px-[2vw] ' src={image}></img>
            <div> <h1 className='text-white text-[1.5vw] mt-[1vw]'>{title} - By {author}</h1>
                <h2 className='text-white text-[1vw]' >{language}</h2>
                <h2 className='text-white text-[1.2vw] mt-[0.4vw]'>{category}</h2>
                <h2 className='text-white text-[1.5vw] mt-[4vw]'>${price}</h2>
            </div>
            <div className='flex relative left-[7vw] top-[4vw] '>
                <h1 className='bg-red-700 pb-1.5 h-[1.6vw] w-[1.6vw] flex items-center justify-center text-[1.6vw] cursor-pointer' >+</h1>
                <h2 className='bg-white  h-[1.6vw] w-[1.9vw] flex items-center justify-center text-[1.1vw]'>1</h2>
                <h1 className='bg-red-700 pb-2 h-[1.6vw] w-[1.6vw] flex items-center justify-center text-[1.8vw] cursor-pointer' >-</h1>
            </div>

        </div>
    )
}

export default Card2