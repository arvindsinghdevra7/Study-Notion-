import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

const Navbar = (props) => {
 let isLoggedIn=props.isLoggedIn;
 let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to='/'>
       <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex text-richblack-100 gap-9 '>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
             <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>

  {/* button  */}
  <div className=' flex items-center gap-x-4 '>
 
 {/* jb login koi ni hoga tb login singup dikhenge */}
 { !isLoggedIn &&
  <Link to="/login">
    <button className='bg-richblack-800 text-richblack-100 py-[8px]  px-[12px] rounded-[8px] border  border-richblack-700  '>
      Log in
    </button>
  </Link>
 }

 {!isLoggedIn &&
  <Link to="/signup">
    <button className='bg-richblack-800 text-richblack-100 py-[8px]  px-[12px] rounded-[8px] border  border-richblack-700 '>
      Sign Up
    </button>
  </Link>
 }

 {/* jb user login hoga tb dekhega logout or dashboard */}
 { isLoggedIn &&
  <Link to="/">
    <button className='richblack800 text-richblack-100 py-[8px]  px-[12px] rounded-[8px] border  '
     onClick={()=>{
      setIsLoggedIn(false);
      toast.success("Logged Out");
    }}>
      Log Out
    </button>
  </Link>
 }
 { isLoggedIn &&
  <Link to="/dashboard">
    <button className='richblack800 text-richblack-100 py-[8px]  px-[12px] rounded-[8px] border  '>
      Dashboard
    </button>
  </Link>
 }

  </div>


    </div>
  )
}

export default Navbar