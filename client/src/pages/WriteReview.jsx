import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Footer, Navbar } from '../components';

const WriteReview = () => {
  const [listOfReviews, setListOfReviews] = useState([]);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getReviews").then((response) => {
      setListOfReviews(response.data);
    })
  }, [])

  const createReview = () => {
    Axios.post("http://localhost:3001/createReview", {
      name, 
      title, 
      author,
      data
    }).then((response) => {
      alert("Review Posted!");
      document.location.reload();
    })

  }
  return (
    
    <main className='bg-slate-100 -z-20'>
      <Navbar />
      <div className='bg-[rgb(255,136,106)] clip-path-mycurve h-5/6 w-screen fixed -z-0'></div>
      <div className='relative mt-10'>
        
       <div className='flex flex-col space-y-2 w-full md:w-4/6 mx-auto p-10 z-30 text-md sm:text-xl'>
       <input type="text" 
        placeholder='Book Title'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="p-4 rounded-md font-oswald focus:outline-none bg-slate-100 focus:bg-white"
        />
        <input type="text" 
        placeholder='Author'
        onChange={(e) => {
          setAuthor(e.target.value)
        }}
        className="p-4 rounded-md font-oswald focus:outline-none bg-slate-100 focus:bg-white"
        />
        <input type="text" 
        placeholder="Your Name" 
        onChange={(e) => {
          setName(e.target.value)
        }}
        className="p-4 rounded-md font-oswald focus:outline-none bg-slate-100 focus:bg-white"/>
        

        <textarea 
        type="text" 
        placeholder='Write your review...' 
        onChange={(e) => {
          setData(e.target.value)
        }}
        className="h-[250px] p-4 rounded-md font-poppins focus:outline-none bg-slate-100 focus:bg-white"
        />
        <button 
        onClick={createReview}
        className=' font-oswald bg-[rgb(136,152,185)] hover:text-white text-[rgb(255,136,106)] transition-all ease-in-out py-2 sm:py-5 px-10 rounded-md focus:outline-none font-bold text-lg uppercase tracking-widest'
        >
          Submit Review
        </button>
      </div>

      <div className='m-4'>
        <h1 className='font-logo text-[rgb(136,152,185)] text-xl font-bold text-center uppercase'>Check out these BookClub Reviews!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 m-10'>
          {listOfReviews.map((review, id) => {
            return (
              <div key={id} className="bg-white relative p-6 lg:p-10 rounded-xl min-h-[300px] flex flex-col items-center justify-center text-md sm:text-xl text-center space-y-2 hover:scale-105 transition-all ease-in-out">
                <div className='clip-path-footercurve bg-[rgb(136,152,185)]/10 absolute h-3/6 w-full bottom-0 -z-0'></div>
                <h1 className='font-oswald uppercase z-20 '>{review.title}</h1>
                <h1 className='font-poppins z-20 italic mb-2 '>-{review.author}</h1>
                <h1 className='font-poppins z-20'>" {review.data} "</h1>
                <h1 className='font-oswald md:ml-48 z-20 '> -{review.name}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
      <Footer />
    </main>
  )
}

export default WriteReview