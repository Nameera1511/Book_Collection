
import functionApi from '../Components/ApiDisplay'
import { useState,useEffect } from 'react';
import BookList from '../Components/BookList';
const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const loadBooks = async () => {
    try {
      const data = await functionApi();
      console.log("Books:", data); 
      setBooks(data);
      setLoading(false);
    } catch (err) {
      console.error("API fetch error:", err);
      setLoading(false);
    }
  };
    loadBooks()
    
  }, []);

  if (loading) {
    return <div className="border-6 border-solid border-gray-400 rounded-4xl w-10 h-10 animate-spin  mx-150 my-40 border-t-indigo-500"></div>;
  }

  return (
    <>
     
        <div className='bg-yellow-50'>
    
      <BookList books={books} />
    </div>
    </>
   
  )
}

export default Home