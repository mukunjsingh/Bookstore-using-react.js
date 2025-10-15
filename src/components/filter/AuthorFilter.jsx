import React, { useState } from 'react';
import books from "../../data/books";
import { RxCross1 } from "react-icons/rx";

const AuthorFilter = ({ authors, setAuthors }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleAdd = () => {
    const name = input.trim().toLowerCase();
    if (name !== "" && !authors.includes(name)) {
      setAuthors([...authors, name]);
      setInput("");
      setSuggestions([]);
    }
  };

  const handleRemove = (name) => {
    setAuthors(authors.filter((a) => a !== name));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const matches = books
        .map((b) => b.author.toLowerCase())
        .filter((a) => a.includes(value.toLowerCase()));
      setSuggestions([...new Set(matches)]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    const lowerName = name.toLowerCase();
    if (!authors.includes(lowerName)) {
      setAuthors([...authors, lowerName]);
    }
    setInput("");
    setSuggestions([]);
  };

  return (
    <>
      <div className="p-2 flex gap-[1vw] relative ">
        <input
          value={input}
          type="text"
          placeholder="Enter author name"
          className="w-[70%] p-1 rounded bg-gray-700 text-white"
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-gray-700 rounded mt-1 max-h-40 overflow-y-auto z-50">
            {suggestions.map((author, i) => (
              <li
                key={i}
                className="p-2 hover:bg-gray-600 cursor-pointer"
                onClick={() => handleSelect(author)}
              >
                {author}
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-[#20af6c] px-[0.8vw] py-[0.4vw] rounded-[0.6vw] cursor-pointer hover:bg-[#06e27b]"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {/* Dynamic chips */}
      <div className="flex flex-wrap gap-2 p-2">
        {authors.map((name, i) => (
          <div
            key={i}
            className="px-2 bg-gray-500 text-white flex items-center gap-2 rounded"
          >
            {name}
            <RxCross1
              className="cursor-pointer hover:text-red-400"
              onClick={() => handleRemove(name)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorFilter;
