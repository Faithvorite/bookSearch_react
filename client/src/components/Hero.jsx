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
    <div className='flex flex-col space-y-6 p-4 sm:p-24 bg-[rgb(255,136,106)] my-2 h-[500px] w-screen clip-path-mycurve items-center justify-center'>
        <div className="w-screen mr-3 font-bold text-6xl sm:text-8xl font-logo text-[rgb(136,152,185)] px-10 ">the {text}</div>
       <SearchForm />
        {/* <div className='font-oswald uppercase text-3xl w-full text-white p-4 bottom-0 right-0 flex items-end justify-between'> <div className="font-oswald text-xl text-white">  
          Browse the 2023 reading list or add your own.
        
      </div>
      <div className='tracking-widest font-oswald'>2023</div>
      </div>       */}
    </div>
  )
}

export default Hero