


import React from 'react'
 


const functionApi = async (id=null) => {
  let url =""
  if (id){
   url = `https://www.googleapis.com/books/v1/volumes/${id}`
  }
  else {
    url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
  }
    const res = await fetch(url)  
  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }
  const data = await res.json();
 return id ? data : data.items;
}

  
    export default functionApi