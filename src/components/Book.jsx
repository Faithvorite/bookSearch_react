import React from 'react';
import { Link } from 'react-router-dom';

const Book = (book) => {
  return (
    <div className='flex flex-col min-w-[350px] rounded-md min-h-[550px] p-4 items-center justify-center bg-white hover:shadow-lg transition-all ease-in-out'>
      <Link to = {`/book/${book.id}`} {...book}>
        <img src = {book.cover_img} alt = "cover" className='w-[220px] h-[350px] object-cover pb-4'/>
      </Link>
      <div className='max-w-[300px] text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span className='font-oswald text-xl uppercase'>{book.title}</span>
          </div>
        </Link>

        <div className='font-oswald'>
          <span className='font-poppins'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='font-poppins'>
          <span className='font-poppins'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='font-poppins'>
          <span className='font-poppins'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book