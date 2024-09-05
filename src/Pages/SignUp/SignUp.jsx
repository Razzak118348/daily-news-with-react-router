import { Link } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const SignUp = () => {

    const {creatUser}= useContext(AuthContext)

 const handleSignUp =(e)=>{

    e.preventDefault()

  const form = new FormData(e.currentTarget);
const email = form.get('email') //get() hold the name property 
const name = form.get('name')
const photoUrl = form.get('photo')
const password = form.get('password')
console.log(name,photoUrl,email,password)

 creatUser(email,password)
 .then((result) => {
  console.log(result.user)
  
 })
 .catch(error=>console.log(error.message))

 }

    return (
        <div className="bg-gray-200 min-h-screen p-3 rounded-2xl ">
            <Navbar></Navbar>
            <div className="font-poppins mt-8 mb-10 lg:mx-80 lg:my-40 bg-[#FFFFFF] border border-green-300 text-center m-8  rounded-xl">
             <h2 className="text-xl md:text-4xl font-semibold text-[rgb(64,63,63)] mt-9">Please Register </h2>

             <hr className="mt-8" />


             {/* logIn  */}

             <div className="">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text text-lg">Your name</span>
          </label>
          <input type="text" name="name" placeholder="Input your Name" className="input input-bordered" required />
        <label className="label">
            <span className="label-text text-lg">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder=" photo url" className="input input-bordered" required />
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       <p className="mt-5 flex space-x-2 text-lg">
        <input type="checkbox" name="" id="" />
       <span> Accept <Link className=" font-bold underline text-[#706F6F] " to={'/terms'}>Terms & Conditions</Link></span>
       </p>
          <label className="label text-xl ">
            <Link to={'/login'} className=" text-lg">
                Already have an Account ? <span className="text-red-600 font-bold underline">Login</span>
            </Link>
            
          </label>
        </div>
        <div className="form-control mt-6">
        <button  className="btn hover:bg-green-500 bg-[#403F3F] text-white font-bold text-lg md:text-2xl ">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SignUp;