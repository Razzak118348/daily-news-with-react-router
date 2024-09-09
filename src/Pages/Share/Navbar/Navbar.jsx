import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../../Context/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

  const {user,LogOut,loading}= useContext(AuthContext)
  console.log(user.email)

const handleSignOut = ()=>{
  LogOut()
.then(result => console.log(' successfully logout '))
.catch(error => console.log(error.message))
}
  const Navlink = <>
    <li>  <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/'>Home</NavLink></li>
    <li> <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/about'>About</NavLink></li>
    <li> <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/career'>Career</NavLink></li>
    <li>  <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/signup'>SignUp</NavLink></li>
  </>



if(loading){
    return <div className="flex justify-center items-center text-center mt-20"><span className="loading loading-spinner loading-lg "></span></div>
}

 else return (

    <div className="navbar  sticky  top-2 w-auto  bg-base-200 mt-8 rounded-xl mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {Navlink}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Navlink}
    </ul>
  </div>
  <div className="navbar-end">
  <p className="  mr-2  w-6 md:w-10 h-6 md:h-10"><FaCircleUser className="w-6 md:w-10 h-6 md:h-10"></FaCircleUser></p>
  {
   ( user ) ? <><p className="text-green-500 font-bold">{user.email}</p> <button onClick={handleSignOut} className="btn hover:text-black  bg-[#403F3F] font-poppins text-xl font-semibold text-white">Sign Out</button></>
    :
    <Link to='/login' className="hover:text-black btn bg-[#403F3F] font-poppins text-xl font-semibold text-white"><button>Login</button></Link>
  }

  </div>
</div>

  );
};

export default Navbar;
