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
<div className='w-[100%] p-12 flex  items-center justify-center'>
 
    <form  onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 lg:w-[60%] h-[400px] md:w-[80%] sm:w-[80%] md:p-0 sm:p-0 bg-gray-700 rounded-lg '> 
       <div className='flex flex-col gap-5 justify-center items-center '>
    <input type="text" placeholder='Enter BookName' onChange={handleChange} value={book.bookname} name='bookname' className=' sm:w-[70%] h-10 lg:w-[100%]  md:w-[80%] text-center text-white border-2 border-amber-700 rounded-md' />
    <input type="text" placeholder='Enter AuthorName'onChange={handleChange} value={book.authorname} name='authorname' className=' sm:w-[70%]  h-10 lg:w-[100%] my-5 md:w-[80%]  text-center text-white border-2 border-amber-700 rounded-md'/>
    <input type="text" placeholder='Enter Sale Info'onChange={handleChange} value={book.saleinfo} name='saleinfo' className=' sm:w-[70%]  h-10 lg:w-[100%]   md:w-[80%]   text-center text-white border-2 border-amber-700 rounded-md'/>
    <button className='h-10 w-30 bg-blue-900 rounded-xl my-10  text-white' onClick={savehandle}>Save</button>
    </div>
</form>
  </div>
  

  )
}

export default Addbook