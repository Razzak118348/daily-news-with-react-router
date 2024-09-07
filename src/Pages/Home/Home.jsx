import { useLoaderData } from "react-router-dom";
import Header from "../Share/Header/Header";
import LeftSideNav from "../Share/LeftSideNav/LeftSideNav";
import Navbar from "../Share/Navbar/Navbar";
import RightSideNav from "../Share/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
    const AllNews = useLoaderData();
    const { loading } = useContext(AuthContext);

    // State to control the number of news to display
    const [showMore, setShowMore] = useState(false);

    // Function to toggle "Show More"
    const handleShowMore = () => setShowMore(!showMore);

    if (loading) {
        return (
            <div className="flex justify-center items-center text-center mt-20">
                <span className="loading loading-spinner loading-lg "></span>
            </div>
        );
    }

    return (
        <div className="font-poppins">
            <Header />
            <BreakingNews />
            <Navbar />

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20">
                <div>
                    <LeftSideNav />
                </div>

                {/* news section  */}
                <div className="md:col-span-2">
                    {AllNews.slice(0, showMore ? AllNews.length : 3).map((news, idx) => (
                        <NewsCart key={idx} SingleNews={news} />
                    ))}

                    {/* Show More / Show Less button */}
                    <button
                        onClick={handleShowMore}
                        className=" bg-blue-500 text-white px-4 py-2 rounded "
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>

                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;
