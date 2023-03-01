import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Navbar } from '../components';

const WriteReview = () => {
  const [listOfReviews, setListOfReviews] = useState([]);
  const [name, setName] = useState('');
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
      data
    }).then((response) => {
      alert("Review Posted!");
      document.location.reload();
    })

  }
  return (
    
    <main className='bg-slate-100'>
      <Navbar />
      <div className=''>

       <div className='flex flex-col space-y-2 w-full md:w-4/6 mx-auto p-10 z-20'>
        <input type="text" 
        placeholder="Name.." 
        onChange={(e) => {
          setName(e.target.value)
        }}
        className="p-2 rounded-md font-oswald focus:outline-none"/>
        <input type="text" 
        placeholder='Book Title'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="p-2 rounded-md font-oswald focus:outline-none"
        />

        <textarea 
        type="text" 
        placeholder='Write your review...' 
        onChange={(e) => {
          setData(e.target.value)
        }}
        className="h-[250px] p-2 rounded-md font-poppins focus:outline-none"
        />
        <button 
        onClick={createReview}
        className=' font-oswald bg-[rgb(136,152,185)] hover:bg-[rgb(255,136,106)] transition-all ease-in-out py-2 sm:py-5 px-10 rounded-md focus:outline-none text-white font-bold text-lg uppercase tracking-widest'
        >
          Submit Review
        </button>
      </div>

      <div className='m-10 '>
        <h1>BookClub Reviews</h1>
        <div className='grid grid-cols-3 gap-4 m-10'>
          {listOfReviews.map((review, id) => {
            return (
              <div key={id} className="">
                <h1>{review.name}</h1>
                <h1>{review.title}</h1>
                <h1>{review.data}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
      
    </main>
  )
}

export default WriteReview