import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] font-poppins font-semibold rounded-lg text-lg p-3  mt-3">
            <Link to={'https://www.nydailynews.com/'} className= "btn  btn-secondary bg-red-700 font-poppins text-white text-sm md:text-lg font-medium">Latest News</Link>
            <Marquee pauseOnHover={true} speed={90}>
            Welcome to the Daily News Website! We are committed to truthfulness and bringing you the most accurate news.
                <Link  to={'https://www.nydailynews.com/'} className="text-green-800 mx-4"> Latest News here..</Link>

            </Marquee>
            {/* marquee theke marquee install kore then import kore marquee use korte hoy  */}
        </div>
    );
};

export default BreakingNews;