import { useLoaderData } from "react-router-dom";
import Header from "../Share/Header/Header";
import LeftSideNav from "../Share/LeftSideNav/LeftSideNav";
import Navbar from "../Share/Navbar/Navbar";
import RightSideNav from "../Share/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Home = () => {

      const AllNews = useLoaderData();
      console.log(AllNews)
const {loading} = useContext(AuthContext)

if(loading){
    return <div className="flex justify-center items-center text-center mt-20"><span className="loading loading-spinner loading-lg "></span></div>
}

else  return (
        <div className="font-poppins" >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div><LeftSideNav>
                    </LeftSideNav></div>

                    {/* news section  */}
                    <div className="md:col-span-2">

                        {
                          AllNews.map((news,idx) => <NewsCart key={idx} SingleNews={news}></NewsCart>)
                        }
                    </div>
                <div><RightSideNav>
                    </RightSideNav></div>
            </div>

        </div>

    );
};

export default Home;