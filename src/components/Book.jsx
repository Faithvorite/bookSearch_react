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

        <div >
          <span className='font-oswald'>Author: </span>
          <span className='font-base'>{book.author?.join(", ")}</span>
        </div>

        <div>
          <span className='font-oswald'>Total Editions: </span>
          <span className='font-base'>{book.edition_count}</span>
        </div>

        <div >
          <span className='font-oswald'>First Publish Year: </span>
          <span className='font-base'>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book