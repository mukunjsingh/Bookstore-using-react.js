import React from 'react';
import Cards from '../components/Cards';
import books from '../data/books';

const Home = ({ searchTerm = '', searchAuthor = [], categoriesFilter = [], ratingFilter = [], priceFilter = [] }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&

    (searchAuthor.length === 0 || searchAuthor.some(author => book.author.toLowerCase().includes(author))) &&

    (categoriesFilter.length === 0 || categoriesFilter.includes(book.category.toLowerCase())) &&

    (ratingFilter.length === 0 || ratingFilter.includes(book.rating)) &&

    (priceFilter.length === 0 || (book.price >= priceFilter[0] && book.price <= priceFilter[1]))

 


  );

  return (
    <div className='absolute top-[7.5vw] h-[310vh] w-[77vw] lg:left-[22vw] left-[15vw]'>
      <div className='h-full w-[77vw]'>
        <h1 className='text-white lg:text-[1.6vw] text-[3vw] relative bottom-[1.5vw] px-[2vw] h-[1vw]  '>
          Books
        </h1>

        <div className='grid lg:grid-cols-4 grid-cols-1 gap-[2vw]'>
          {filteredBooks.map((book) => (
            <Cards
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              category={book.category}
              image={book.image}
              rating={book.rating}
              slug={book.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
