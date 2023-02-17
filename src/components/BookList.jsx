import React from 'react';
import { useGlobalContext } from '../context.';
import Book from "../components/Book";
import Loading from "../components/Loader";
import coverImg from "../images/cover_not_found.jpg";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='w-screen'>
      <div className='w-screen h-full'>
        <div className='font-bold p-10 font-base'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='flex flex-wrap gap-2 items-center justify-center'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList