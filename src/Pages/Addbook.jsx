import React, { useState } from 'react'

const Addbook = () => {
  const [book , setBook] = useState({
    bookname: "",
    authorname : "",
    saleinfo : ""
  })
 const [item , setItem] = useState([])

function handleSubmit(){
 if (book !== ""){     
      setItem([...item, book]);       
      setBook("");                        
    }
}
const handleChange=(e)=>{
  setBook({...book ,
     [e.target.name]: e.target.value }
    )
}
function savehandle(){
  alert(`Save successfully \n 
    BookName : ${book.bookname}\n 
    AuthorName : ${book.authorname} \n 
    SaleInfo : ${book.saleinfo}`)

}
  return (
<div className='bg-yellow-50 w-auto h-screen '>
  <form className='flex-col  lg:w-160 lg:mx-70 lg:py-30 sm:w-50 sm:mx-20 sm:py-5 md:w-50 md:mx-20 md:py-5 bg-gray-700 my-10 rounded-lg ' onSubmit={handleSubmit}> 
    <input type="text" placeholder='Enter BookName' onChange={handleChange} value={book.bookname} name='bookname' className='lg:h-10 lg:w-100 lg:mx-20 md:h-10 md:w-100 text-center text-white border-2 border-amber-700 rounded-md' />
    <input type="text" placeholder='Enter AuthorName'onChange={handleChange} value={book.authorname} name='authorname' className='lg:h-10 lg:w-100 lg:mx-20 my-5 md:h-10 md:w-100  text-center text-white border-2 border-amber-700 rounded-md'/>
    <input type="text" placeholder='Enter Sale Info'onChange={handleChange} value={book.saleinfo} name='saleinfo' className='lg:h-10 lg:w-100 lg:mx-20 md:h-10 md:w-100   text-center text-white border-2 border-amber-700 rounded-md'/>
    <button type='submit' className='h-10 w-30 bg-blue-900 rounded-xl my-10 mx-50 text-white' onClick={savehandle}>Save</button>
</form>
</div>
  )
}

export default Addbook