import React from 'react';

const Price = ({ price, setprice }) => {
  return (
    <div className="p-2">
      <label>Min Price: ${price[0]}</label>
      <input
        type="range"
        min="0"
        max="30"
        value={price[0]}
        onChange={(e) => setprice([Number(e.target.value), price[1]])}
      />

      <label>Max Price: ${price[1]}</label>
      <input
        type="range"
        min="0"
        max="30"
        value={price[1]}
        onChange={(e) => setprice([price[0], Number(e.target.value)])}
      />
    </div>
  );
};

export default Price;
