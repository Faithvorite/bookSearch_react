import React, { useEffect, useRef } from 'react'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context.';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(()=> searchText.current.focus(), []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w3\s]/gi,"")).length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    // navigate("/book");
  }
  return (
    <div className='w-full flex py-12 items-center justify-center '>
    <form onSubmit={handleSubmit} className='bg-slate-100 w-5/6 sm:w-3/6 flex justify-between p-4 rounded-lg'>
              <input type="text" ref={searchText} placeholder="the Lost World..." className='font-bold uppercase font-oswald tracking-wider w-full bg-transparent focus:outline-none text-[rgb(136,152,185)]' />
              <button onClick={handleSubmit} type="submit">
                <FaSearch size={24} className="text-[rgb(136,152,185)]"/>
              </button>
          </form>
    </div>
  )
}

export default SearchForm