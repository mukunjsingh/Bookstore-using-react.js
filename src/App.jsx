import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Filter from "./components/filter/Filter";

import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Favourite from './pages/Favourite'
import BooksDetail from './pages/BooksDetail';
import books from './data/books';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';  // adjust path if needed




const App = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const [searchAuthors, setsearchAuthors] = useState([]);
  const location = useLocation();
  const [categoriesFilter, setcategoriesFilter] = useState([])
  const [ratingFilter, setratingFilter] = useState([])
  const [priceFilter, setpriceFilter] = useState([0, 30])

  const isBookDetail = location.pathname.startsWith("/book/");
  const iscart = location.pathname.startsWith("/cart");

  return (
    <CartProvider>
    <div >
      {!isBookDetail && !iscart && (
        <>

          <Filter setpriceFilter={setpriceFilter}
            setsearchAuthors={setsearchAuthors}
            setcategoriesFilter={setcategoriesFilter}
            setratingFilter={setratingFilter} />
        </>
      )}
      <Navbar setsearchTerm={setsearchTerm} />


      <Routes>
        <Route path='/' element={<Home priceFilter={priceFilter} ratingFilter={ratingFilter} categoriesFilter={categoriesFilter} searchTerm={searchTerm} searchAuthor={searchAuthors} />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/book/:slug' element={<BooksDetail books={books} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>



    </div>
    </CartProvider>
  )
}

export default App