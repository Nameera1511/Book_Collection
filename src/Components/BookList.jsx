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
    <div className="grid gap-6 my-15 px-4 py-6 sm:px-10 sm:py-10 md:px-16 md:py-12 lg:px-20 lg:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col items-center justify-between bg-gray-200 shadow-lg rounded-lg p-5 hover:shadow-xl "
        >
          {/* Top buttons */}
          <div className="flex justify-between items-center w-full mb-3">
            <Link to={`/book/${book.id}`}>
              <button className="bg-gray-700 px-3 py-1 text-white rounded-md text-sm sm:text-base ">
                View Detail
              </button>
            </Link>

            <button onClick={() => toggleFav(book.id)}>
              <FaHeart
                className={
                  fav.includes(book.id)
                    ? "text-red-600 w-6 h-6 sm:w-7 sm:h-7"
                    : "text-gray-600 w-6 h-6 sm:w-7 sm:h-7"
                }
              />
            </button>
          </div>

          {/* Image */}
          {book.volumeInfo?.imageLinks?.thumbnail && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="h-40 w-70 object-contain mb-4"
            />
          )}

          {/* Title + Author */}
          <h2 className="font-bold text-center text-gray-900 mb-2">
            {book.volumeInfo?.title}
          </h2>
          <p className="text-sm text-gray-800 text-center">
            {book.volumeInfo?.authors?.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;