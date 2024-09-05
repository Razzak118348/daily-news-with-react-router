import { Link,  useNavigate } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";



const Login = () => {
const navigate = useNavigate();
  const { SignIn ,Loginbutton} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page

    // const email = e.target.email.value;
    // console.log("Email:", email);

    //new format 
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')

    // ei function Authprovider.jsx k call korbe 
    SignIn(email, password)
      .then((result) => {
        console.log(result.user)

navigate('/')

      })
      .catch(error => console.log(error.message))


  }



  return (
    <div className="bg-gray-200 min-h-screen rounded-2xl ">
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
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>

                  </label>
                  <label className="label text-xl ">
                    <Link to={'/signup'} className=" text-lg">Don't Have An Account ? <span className="text-red-600 font-bold underline">Register</span>
                    </Link>

                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#403F3F] text-white font-bold text-2xl ">Login</button>
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