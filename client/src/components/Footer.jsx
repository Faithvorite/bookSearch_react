import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-[250px] mt-24 clip-path-footercurve bg-[rgb(255,136,106)] flex items-center text-center justify-between flex-row px-2 sm:px-24'>
        <span className='font-logo uppercase font-bold text-xl text-[rgb(136,152,185)] '>Faith Nguyen 2023</span>
        <span className='font-oswald text-[rgb(136,152,185)] text-xl '>Come Visit
          <div className="flex flex-row gap-4 text-center uppercase text-sm md:text-md font-bold text-white ">
            <a href="https://faithnguyen.vercel.app" target="_blank">Portfolio</a>
            <a href="https://github.com/Faithvorite" target="_blank">Git</a>
            <a href="https://www.linkedin.com/in/faith-r-nguyen/" target="_blank">LinkedIn</a>
          </div>
        </span>
        </div>
  )
}

export default Footer