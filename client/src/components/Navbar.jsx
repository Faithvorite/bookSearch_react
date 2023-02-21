import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

const Navbar = () => {
  return (
    <div className=''>
    <header className='w-full flex justify-between items-center bg-[rgb(255,253,249)] md:px-36 p-4'>
      <Link to="/" className='text-[rgb(136,152,185)] font-bold font-logo  text-xl sm:text-4xl'>
        BookClub.
      </Link>
      <Link to="/add-book"
      className=' bg-[rgb(136,152,185)] text-white p-2 rounded-md font-oswald tracking-wider hover:bg-[rgb(255,136,106)] uppercase transition-all ease-in-out'>Add Book</Link>
    </header>
    </div>
  )
}

export default Navbar