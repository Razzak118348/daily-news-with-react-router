import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
     const Navlink = <>
   <li>  <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/'>Home</NavLink></li>
    <li> <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/about'>About</NavLink></li>
    <li> <NavLink className='my-2 md:mr-6 font-poppins text-lg font-normal' to='/career'>Career</NavLink></li>
     </>
    return (
        <div className="navbar sticky top-64 z-50 bg-base-100 mt-4">
        <div className="navbar-start">
          <div className="dropdown">
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  transition-all duration-300  ease-in-out delay-10 opacity-0 ">
             {Navlink}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">
            {Navlink}
          </ul>
        </div>
        <div className="navbar-end">
<p className="  mr-2  w-6 md:w-10 h-6 md:h-10"><FaCircleUser className="w-6 md:w-10 h-6 md:h-10"></FaCircleUser></p>
          <Link to='/login' className=" btn bg-[#403F3F] font-poppins text-xl font-semibold text-white ">Login</Link>
        </div>
      </div>
    );
};

export default Navbar;