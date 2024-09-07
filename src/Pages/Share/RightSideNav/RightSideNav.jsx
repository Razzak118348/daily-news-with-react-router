import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import swimmingImage from '../../../assets/qZone1.png'
import classImage from '../../../assets/qZone2.png'
import PlaygruondImage from '../../../assets/qZone3.png'
import './RightSide.css';
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

const RightSideNav = () => {

  const {loading,user} = useContext(AuthContext)

  if(loading){
      return <div className="flex justify-center items-center text-center mt-20"><span className="loading loading-spinner loading-lg "></span></div>
  }

  const auth = getAuth(app)

const googleLogin =()=>{
const provider = new GoogleAuthProvider(auth)
signInWithPopup(auth,provider)
.then((result)=>console.log(result.user))
.catch(error => console.log(error.message))
}

const gitHubLogin = ()=>{
const provider = new GithubAuthProvider(auth)
signInWithPopup(auth,provider)
.then(result => console.log(result.user))
.catch(error => console.log(error.message))
}

  return (
    <div className="  rounded-lg mb-10">
      <h2 className="text-2xl font-poppins font-bold  mb-4">Login With</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-5">
        <button onClick={googleLogin} className="btn btn-wide text-blue-400 border-2 border-blue-400 text-lg font-medium">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button onClick={gitHubLogin} className="btn btn-wide text-black border-2 border-black text-lg font-medium">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-poppins font-bold  mb-4">Find Us On</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-5  lg:gap-2">
          <button className="btn btn-wide border-gray-400  font-medium text-lg">
            <ImFacebook className="text-[#3B599C]"></ImFacebook>Facebook
          </button>
          <button className="btn btn-wide border-gray-400   font-medium text-lg"><FaTwitter className="text-[#58A7DE]"></FaTwitter>Twitter</button>
          <button className="btn btn-wide border-gray-400   font-medium text-lg"><FaInstagram className="text-[#b23e74]"></FaInstagram>
            Instagram
          </button>
        </div>
      </div>
      {/* find on us section close  */}

      {/* Q-zone start  */}
      <div className="bg-[#F3F3F3]  mt-16 rounded-xl shadow-lg p-3 pl-5" >
        <h2 className="text-2xl font-semibold  md:text-center  ">
          Q-Zone
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-1 gap-6">

          <img src={swimmingImage} alt="" />
          <img src={classImage} alt="" />
          <img src={PlaygruondImage} alt="" />
        </div>
      </div>

      <div className="mt-5 backgroundImage text-white rounded-lg text-center mx-auto ">
        <h2 className="text-3xl font-bold pt-14 pb-8 px-10 ">Create an Amazing Newspaper</h2>

        <p className="text-lg font-normal px-10 pb-5 md:mx-20 lg:mx-0 ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

        <button className="rounded-lg hover:bg-pink-600 h-16 w-36 bg-red-700 my-10 btn-secondary text-white text-lg">Learn More <FaArrowRight className="mx-auto"></FaArrowRight>

        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
