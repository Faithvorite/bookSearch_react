import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import SearchForm from './SearchForm';

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "BookClub."
        ],
        loop: true,
        delaySpeed: 8000,
    });
  return (
    <div className='flex flex-col space-y-2 p-5 py-14 bg-[rgb(255,136,106)] my-2 h-[450px] w-screen clip-path-mycurve'>
        <div className="mr-3 font-bold text-4xl sm:text-6xl font-logo text-[rgb(136,152,185)] p-2 ">the {text}</div>
       <SearchForm />
        <div className='font-oswald uppercase text-3xl w-full text-white p-4 bottom-0 right-0 flex items-center justify-between'> <div className="font-oswald text-xl text-white">  
          Welcome to the Book Club! Browse the 2023 reading list or add your own.
        
      </div>
      <div className='tracking-widest font-oswald'>2023</div>
      </div>      
    </div>
  )
}

export default Hero