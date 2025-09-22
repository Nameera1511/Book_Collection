import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Bookview = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      const data = await res.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!book) return <div className="border-6 border-solid border-gray-400 rounded-4xl w-10 h-10 animate-spin  mx-150 my-40 border-t-indigo-500"></div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.volumeInfo?.title}</h1>
      <p className="font-bold my-6">By: {book.volumeInfo?.authors?.join(", ")}</p>
      <p className="my-6 ">Description: <br/> {book.volumeInfo?.description}</p>
      {book.volumeInfo?.imageLinks?.thumbnail && (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      )}
    </div>
  );
};

export default Bookview;