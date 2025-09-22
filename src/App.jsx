
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Addbook from './Pages/Addbook'

import Rootlayout from './layout/Rootlayout'
import Contact from './Pages/Contact'
import Bookview from './Pages/Bookview'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
         <Route index element={<Home/>}/>
       <Route path='Addbook' element={<Addbook/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path="book/:id" element={<Bookview />} />
       
      </Route>
    )
  )

  return (
    <>
    <div className='bg-yellow-50 max-h-screen min-h-screen'>
      <RouterProvider router={router}/>
    </div>
     
    </>
  )
}

export default App
