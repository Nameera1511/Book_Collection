
import {NavLink} from 'react-router-dom'
const Navbar = () => { 
  return (
   <div className='bg-gray-700 text-white  h-20  flex  justify-between items-center'>
    <div className='flex gap-6 lg:mx-10 sm:mx-5 mx-2 ' >
      <NavLink to={"/"} className={'lg:font-stretch-50% sm:font-normal font-sm'}>Home</NavLink>
    <NavLink to={'/Addbook'} className={' font-stretch-50% sm:font-normal'}>Add Book</NavLink>
    <NavLink to={'/Contact'} className={' font-stretch-50% sm:font-normal'}>Contact Us</NavLink>
    </div>
    <button className='bg-black lg:w-40 lg:h-10 rounded-md lg:font-stretch-50%  sm:font-normal sm:w-30 sm:h-6 md:w-27 md:h-7 mx-6 w-[100%] h-10' >Get Started</button>
   </div>
  )
}

export default Navbar