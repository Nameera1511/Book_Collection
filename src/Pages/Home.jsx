
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
    return <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-gray-400 border-t-indigo-500 rounded-full animate-spin"></div>
  </div>;
  }

  return (
    <>
     
        <div className='bg-yellow-50 '>
    
      <BookList books={books} />
    </div>
    </>
   
  )
}

export default Home