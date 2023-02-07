import React from 'react'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  return (
    <div className='w-screen flex p-12 items-center justify-center '>
          <form className='bg-white w-[480px] flex justify-between p-2 rounded-lg'>
              <input type="text" placeholder="the Last Book..." className='font-bold uppercase ont-poppins w-full bg-transparent focus:outline-none text-[rgb(136,152,185)]' />
              <button>
                <FaSearch size={24} className="text-[rgb(136,152,185)]"/>
              </button>
          </form>
    </div>
  )
}

export default SearchForm