
import {NavLink} from 'react-router-dom'
const Navbar = () => { 
  return (
   <div className='bg-gray-700 text-white  h-20  flex  justify-between items-center fixed top-0 left-0   z-50 w-full px-4'>
    <div className='flex gap-6 lg:mx-10 sm:mx-5 mx-2 ' >
      <NavLink to={"/"} className={'lg:font-stretch-50% sm:font-normal font-sm'}>Home</NavLink>
    <NavLink to={'/Addbook'} className={' font-stretch-50% sm:font-normal'}>Add Book</NavLink>
    <NavLink to={'/Contact'} className={' font-stretch-50% sm:font-normal'}>Contact Us</NavLink>
    </div>
    <button className='bg-black lg:w-40 lg:h-10 rounded-md lg:font-stretch-50%  sm:font-normal sm:w-30 sm:h-7 md:w-27 md:h-7 mx-4 w-30 h-17 text-sm' >Get Started</button>
   </div>
  )
}

export default Navbar

