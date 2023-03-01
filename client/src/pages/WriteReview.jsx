import React, { useEffect, useState } from 'react'
import Axios from "axios";

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
    <div>
      <div>
        <input type="text" 
        placeholder="Name.." 
        onChange={(e) => {
          setName(e.target.value)
        }}/>
        <input type="text" 
        placeholder='Book Title'
        onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <input 
        type="text" 
        placeholder='Write your review...' 
        onChange={(e) => {
          setData(e.target.value)
        }}/>
        <button onClick={createReview}>Submit Review</button>
      </div>
      <div>
        <h1>Reviews</h1>
        <div>
          {listOfReviews.map((review) => {
            return (
              <div>
                <h1>{review.name}</h1>
                <h1>{review.title}</h1>
                <h1>{review.data}</h1>
              </div>
            )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default WriteReview