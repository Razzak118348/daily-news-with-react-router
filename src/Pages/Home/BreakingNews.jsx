import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] font-poppins font-semibold rounded-lg text-lg p-3  mt-3">
            <button className= "btn  btn-secondary bg-red-700 font-poppins text-white text-sm md:text-lg font-medium">Latest News</button>
            <Marquee pauseOnHover={true} speed={90}>
                hi thei slkdfjslkdfjwoejwehsoidfsiodfsdfjslkdfj
                <Link  to={'/latestNews'} className="text-green-800 mx-4"> news of lateset</Link>
                <Link to={'/latestNews'} className="text-green-800"> news of lateset</Link>
                <Link to={'/latestNews'} className="text-green-800 mx-5"> news of lateset</Link>
            </Marquee>
            {/* marquee theke marquee install kore then import kore marquee use korte hoy  */}
        </div>
    );
};

export default BreakingNews;