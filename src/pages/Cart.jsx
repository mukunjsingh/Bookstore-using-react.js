import React from 'react'
import Card2 from '../components/Card2'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className='h-[100vh] w-full absolute top-[12vh] bg-black'>
      <div className='h-[100vh] w-full flex mt-[2vw] justify-center gap-[3.5vw]'>
        <div className='border-white bg-[#1D1E22] rounded-[1.2vw] h-[80%] w-[60%]'>
          <h2 className='text-white px-[2vw] py-[1.2vw] uppercase text-[1.9vw] font-medium'>
            My cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-white px-[2vw]">Your cart is empty.</p>
          ) : (
            cart.map((book, index) => (
              <Card2
                key={index}
                image={book.image}
                title={book.title}
                author={book.author}
                category={book.category}
                language={book.language}
                price={book.price}
              />
            ))
          )}
        </div>

        <div className='border-white bg-[#1D1E22] rounded-[1vw] h-[40%] w-[30%]'>
          
        </div>
      </div>
    </div>
  )
}

export default Cart;
