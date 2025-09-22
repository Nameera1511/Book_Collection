
import {NavLink} from 'react-router-dom'
const Navbar = () => { 
  return (
   <div className='bg-gray-700 text-white  h-20  flex  justify-between items-center'>
    <div className='flex gap-6 mx-10'>
      <NavLink to={"/"} className={'lg:font-stretch-50% sm:font-normal'}>Home</NavLink>
    <NavLink to={'/Addbook'} className={' font-stretch-50% sm:font-normal'}>Add Book</NavLink>
    <NavLink to={'/Contact'} className={' font-stretch-50% sm:font-normal'}>Contact Us</NavLink>
    </div>
    <button className='bg-black lg:w-40 lg:h-10 rounded-md font-stretch-50%  sm:font-normal sm:w-25 sm:h-6 sm:mx-10 md:w-27 md:h-7 md:mx-20 justify-end' >Get Started</button>
   </div>
  )
}

export default Navbar