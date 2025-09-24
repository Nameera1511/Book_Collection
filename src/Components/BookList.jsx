import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookList = ({ books = [] }) => {
  if (!books.length) {
    return <p>Loading...</p>;
  }
  const [fav, setFav] = useState([]);

  const toggleFav = (bookId) => {
    if (fav.includes(bookId)) {
      setFav(fav.filter((id) => id !== bookId));
    } else {
      setFav([...fav, bookId]);
    }
  };

  return (

    <div className="grid  gap-6    m-5        sm:20   md:m-20 lg:m-20  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mb-auto" >
      {books.map((book) => (
        <div key={book.id} className=" rounded  bg-gray-400 shadow-md shadow-gray-500  w-[100%]">
          <div className="flex h-10 w-[100%] gap-3 lg:gap-40  m-4">
             <Link to={`/book/${book.id}`}>
            <button className="bg-gray-700 rounded-md sm:h-6 sm:w-[120%] lg:h-9 lg:w-[120%] lg:text-lg w-22 h-8 text-sm text-white sm:text-sm" >View Detail</button>
            </Link>
            <button className="h-6 w-[20%] " onClick={() => toggleFav(book.id)}><FaHeart className={fav.includes(book.id) ? "text-red-900 lg:h-8 lg:w-8   sm:h-6 sm:w-6  h-4 w-4" : "text-gray-700 lg:h-8 lg:w-8 sm:h-6 sm:w-6 h-5 w-5  " } /></button>
          </div>
          {book.volumeInfo?.imageLinks?.thumbnail && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="mt-2 lg:h-50 lg:w-70  sm:h-20 sm:w-40  h-20 w-30  mx-4 rounded-md"
            />
          )}
          <h2 className="font-bold  mx-5 my-4 text-gray-900">{book.volumeInfo?.title}</h2>
          <p className=" mx-5 my-2 text-gray-900">{book.volumeInfo?.authors?.join(", ")}</p>

        </div>
      ))}
    </div>
  );
};

export default BookList;