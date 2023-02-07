import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "BookClub."
        ],
        loop: true,
        delaySpeed: 8000,
    });
  return (
    <div className='flex flex-col space-y-2 h-[200px] mt-12 mx-24'>
      <div className="relative h-full w-full  font-semibold px-2 bg-[rgb(255,136,106)] flex flex-col space-y-14">
        <div className="mr-3 text-6xl font-logo text-white p-5">{text}</div>
       
        <div className='font-oswald uppercase text-3xl w-full text-white p-4 absolute bottom-0 right-0 flex items-center justify-between'> <div className="font-oswald text-xl text-white">  
          Welcome to the Book Club! Browse the 2023 reading list or add your own.
        
      </div>
      <div className='tracking-widest font-oswald'>2023</div>
      </div>
      </div>
      
    </div>
  )
}

export default Hero