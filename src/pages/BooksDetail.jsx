import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { IoIosCart } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const BooksDetail = ({ books }) => {
  const { slug } = useParams();
  const book = books.find((b) => b.slug === slug);
   const { addToCart } = useCart();
  return (
    <div className=' absolute top-[11%] w-full items-center flex justify-center  '>

      <div className='h-[89vh] flex  w-[95%] gap-[4vw] '>
        <div className='h-[82vh]  w-[37%]  '>
          <img className='h-full w-full object-contain' src={book.image}></img>
        </div>
        <div className='h-[82vh]  w-[64%] '>
          <h1 className='text-white text-4xl px-[2vw] py-[1.3vw] font-medium uppercase' >{book.title} BY {book.author}</h1>
          <div className=' w-full px-[2vw]  flex gap-[1vw] '>
            <img className='w-[3.5vw] rounded-[50%] ' src={book.authorImage}></img>
            <h2 className='text-2xl text-white mt-1.5 uppercase'>{book.author}</h2>
          </div>
          <div className={`text-gray-500 flex text-[1.9vw] mt-[0.5vw] gap-[0.25vw] px-[2vw] `}>
            {[1, 2, 3, 4, 5].map((star) => (
              <LiaStarSolid
                key={star}
                className={`${star <= book.rating ? "text-orange-500" : "text-gray-500"
                  }`}
              />
            ))}
          </div>
          <h2 className='px-[2vw] text-white mt-3'>{book.summary}</h2>
          <div className='text-white flex w-[50%] justify-between px-[2vw]  text-[1.3vw] mt-[1.2vw] '>
            <h2 className='font-medium'>PUBLISHER</h2>
            <h2>{book.publisher}</h2>
          </div>
          <div className='text-white flex w-[50%] justify-between px-[2vw]  text-[1.3vw] ' >
            <h2 className='font-medium'>FIRST PUBLISHER</h2>
            <h2>{book. firstPublishDate}</h2>
          </div>
          <div className='text-white flex w-[50%] justify-between px-[2vw]  text-[1.3vw] '>
            <h2 className='font-medium'>ISBN</h2>
            <h2>{book.isbn}</h2>
          </div>
          <div className='text-white flex w-[50%] justify-between px-[2vw]  text-[1.3vw] '>
            <h2 className='font-medium'>LANGUAGE</h2>
            <h2>{book.language}</h2>
          </div>
          <div className='text-white flex w-[50%] justify-between px-[2vw]  text-[1.3vw] '>
            <h2 className='font-medium'>PAGES</h2>
            <h2>{book.pages}</h2>
          </div>
            <div className='flex justify-between mt-[7vw]  '>
          <button className='px-[1.2vw] bg-[#6D5CD8] text-white py-[0.6vw] uppercase text-[1.2vw] cursor-pointer font-medium rounded-[1.5vw] flex gap-[0.8vw] ml-[1.8vw] ' onClick={() => addToCart(book)}><IoIosCart className='mt-1' />
            Add To Cart</button>
              
            <div className='items-center'>
              <button className='mr-[2vw] px-[1.3vw]  bg-green-400 text-white py-[0.6vw] uppercase text-[1.2vw] font-medium rounded-[1.5vw]'>BUY</button>
              <button className='mr-[2vw] px-[1.3vw] bg-red-400 text-white py-[0.6vw] uppercase text-[1.2vw] font-medium rounded-[1.5vw]'>SELL</button>
              <button className='mr-[2vw] px-[1.3vw] bg-yellow-400 text-white py-[0.6vw] uppercase text-[1.2vw] font-medium rounded-[1.5vw]'>BORROW</button>
            </div>
            </div>


        </div>
      </div>


    </div>
  )
}

export default BooksDetail