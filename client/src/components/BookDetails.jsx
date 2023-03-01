import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../components/Loader";
import coverImg from "../images/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading/>;

  return (
    <section className='book-details'>
      <div className='p-2 sm:p-10 items-center '>
        <button type='button' className='flex' onClick={() => navigate("/")}>
          <FaArrowLeft className='hover:-translate-y-2 transition-all ease-in-out' size = {22} />
          <span className='font-oswald px-4 text-xl'>Go Back</span>
        </button>

        <div className='flex flex-col lg:flex-row items-center justify-center p-10 sm:px-24 gap-10'  > 
          <div className='flex-1book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='flex-1 space-y-2'>
            <div className='font-oswald uppercase text-3xl'>
             {book?.title}
            </div>
            <div className='font-poppins'>
              {book?.description}
            </div>
            <div className='book-details-item'>
              <span className='font-oswald'>Subject Places: </span>
              <span className='italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='font-oswald'>Subject Times: </span>
              <span className='italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='font-oswald'>Subjects: </span>
              <span className='italic'>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails