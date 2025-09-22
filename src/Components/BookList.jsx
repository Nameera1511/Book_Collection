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

    <div className="grid  gap-9  m-20  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto" >
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded shadow bg-gray-400">
          <div className="flex h-10 w-[100%]  justify-between ">
             <Link to={`/book/${book.id}`}>
            <button className="bg-gray-700 rounded-md sm:h-6 sm:w-[120%] lg:h-9 lg:w-30 lg:text-lg  text-white sm:text-sm" >View Detail</button>
            </Link>
            <button className="sm:h-6 sm:w-[30%] " onClick={() => toggleFav(book.id)}><FaHeart className={fav.includes(book.id) ? "text-red-900 lg:h-8 lg:w-8   sm:h-6 sm:w-6 " : "text-gray-700 lg:h-8 lg:w-8 sm:h-6 sm:w-6  " } /></button>
          </div>
          {book.volumeInfo?.imageLinks?.thumbnail && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="mt-2 lg:h-50 lg:w-70  sm:h-20 sm:w-40    mx-4 rounded-md"
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