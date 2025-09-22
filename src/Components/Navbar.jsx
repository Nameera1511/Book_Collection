
import {NavLink} from 'react-router-dom'
const Navbar = () => { 
  return (
   <div className='bg-gray-700 text-white lg:px-40 h-20 py-5 sm:px-20'>
    <NavLink to={"/"} className={'px-4 lg:font-stretch-50% sm:font-normal'}>Home</NavLink>
    <NavLink to={'/Addbook'} className={'px-4 font-stretch-50% sm:font-normal'}>Add Book</NavLink>
    <NavLink to={'/Contact'} className={'px-4 font-stretch-50% sm:font-normal'}>Contact Us</NavLink>
    <button className='bg-black lg:w-40 lg:h-10 rounded-md font-stretch-50% lg:mx-60 sm:font-normal sm:w-25 sm:h-6 sm:mx-30 md:w-27 md:h-7 md:mx-30' >Get Started</button>
   </div>
  )
}

export default Navbar