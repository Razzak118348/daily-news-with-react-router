import { Link } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";


const Login = () => {
    return (
        <div className="bg-gray-200 min-h-screen p-3 rounded-2xl ">
            <Navbar></Navbar>
            <div className="font-poppins mt-8 mb-10 lg:mx-80 lg:my-40 bg-[#FFFFFF] border border-green-300 text-center m-8  rounded-xl">
             <h2 className="text-xl md:text-4xl font-semibold text-[rgb(64,63,63)] mt-9">Login your account</h2>

             <hr className="mt-8" />


             {/* logIn  */}

             <div className="">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
            
          </label>
          <label className="label text-xl ">
            <a href="#" className="label-text-alt link link-hover text-lg">Don't Have An Account ? <span className="text-red-600">Register</span>
            </a>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white font-bold text-2xl">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Login;