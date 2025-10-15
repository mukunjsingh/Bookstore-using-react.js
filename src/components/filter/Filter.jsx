import React, { useState } from 'react';
import FilterSection from './FilterSection';
import AuthorFilter from './AuthorFilter';
import Categories from './Categories';
import Rating from './Rating';
import Price from './Price';

const Filter = ({ setsearchAuthors, setcategoriesFilter, setratingFilter,setpriceFilter }) => {
  const [authors, setAuthors] = useState([]);
  const [category, setcategory] = useState([]);
  const [rating, setrating] = useState([]);
  const [price, setprice] = useState([])


  const handleShowResults = () => {
    setsearchAuthors(authors);
    setcategoriesFilter(category);
    setratingFilter(rating);
    setpriceFilter(price)
  };

  const handleReset = () => {
    setAuthors([]);
    setsearchAuthors([]);
    setcategory([])
    setcategoriesFilter([]);
    setrating([])
    setratingFilter([])
    setprice([])
    setpriceFilter([])
  };

  return (
    <div className="bg-[#262222] h-[89vh] w-[21vw] top-[6vw] fixed rounded-[0.6vw] left-[0.5vw] lg:block hidden">
      <div className="h-full w-[21vw] overflow-x-hidden no-scrollbar">
        <h2 className="text-white text-[1.6vw] ml-[2vw] font-medium">Filter Option</h2>

        <FilterSection title="Price">
          <Price price={price} setprice={setprice} />

        </FilterSection>

        <FilterSection title="Author" >
          <AuthorFilter authors={authors} setAuthors={setAuthors} />
        </FilterSection>

        <FilterSection title="Rating">
          <Rating rating={rating} setrating={setrating} />

        </FilterSection>

        <FilterSection title="Categories">
          <Categories category={category} setcategory={setcategory} />

        </FilterSection>


        <div className="w-full h-[6vw] mt-[2vw] flex items-center justify-center gap-[3vw]">
          <button
            className="cursor-pointer hover:bg-white hover:text-black border-2 border-white text-white px-[1.2vw] h-[3vw] rounded-[0.7vw]"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="cursor-pointer bg-[#6D5CD8] px-[1.2vw] h-[3vw] rounded-[0.7vw] text-white hover:bg-[#5842ec]"
            onClick={handleShowResults}
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
