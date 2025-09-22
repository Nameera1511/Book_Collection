


import React from 'react'
 


const functionApi = async () => {
      const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
  if (!res.ok) {
    throw new Error("Failed to fetch API");
  }
  const data = await res.json();
  return data.items || [];
  
}
    

  
    export default functionApi