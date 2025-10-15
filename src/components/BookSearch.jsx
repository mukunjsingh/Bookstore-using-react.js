
import { useState } from 'react'
import books from '../data/books'

const BookSearch = ({ setsearchTerm }) => {
    const [searchbook, setsearchbook] = useState("")
    const [suggestion, setsuggestion] = useState([])

    const handlechange = (e) => {
        const value = e.target.value;
        setsearchbook(value);
        setsearchTerm(value);

        if (value.length > 0) {
            const matches = books
                .map(b => b.title)                              // get all book titles
                .filter(title => title.toLowerCase().includes(value.toLowerCase()));

            setsuggestion([... new Set(matches)]);
        } else {
            setsuggestion([]);
        }

    }
    const handleClick = (title) => {
        setsearchTerm(title)

        setsearchbook(title)
        setsuggestion([]);
    }

 


    return (
        <div className='flex'>


            <input className=' w-[28vw] h-[2.8vw] border-1 border-white rounded-2xl px-[1.5vw] py-[1.5vw] text-white focus:outline-none relative'
                placeholder='Enter Bookname....'
                onChange={handlechange}></input>
                <button 
                onClick={() => handleClick(searchbook)}
                className='text-white outline-none cursor-pointer w-[6vw] h-[2.8vw] border-blue-500 bg-[#20af6c]  hover:bg-[#06e27b] rounded-2xl px-[2vw] ml-[1.2vw] flex items-center justify-center  '>Find</button>
            {suggestion.length > 0 && (
                <ul className='absolute top-[5vw] text-white w-[28vw] bg-black border-1 border-white  rounded-2xl max-h-[20vw] overflow-y-auto no-scrollbar z-50'>
                    {suggestion.map((title, idx) => (
                        <li key={idx}
                            className='p-2 hover:bg-gray-600 cursor-pointer '
                            onClick={() => handleClick(title)}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
            )}





        </div>
    )
}

export default BookSearch