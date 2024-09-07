import { CiBookmark, CiStar } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const NewsCart = ({ SingleNews }) => {
  console.log(SingleNews);
  const { author, image_url, title, details, category_id, rating, total_view } =
    SingleNews;

  return (
    <div className="my-16 border-2 shadow-lg rounded-2xl p-5 font-poppins">
      <div className="flex justify-between  py-3 bg-gray-300 rounded-lg pr-4">
        <div className="flex space-x-3">
          <div>
            <img
              className="w-16 h-16 rounded-full p-0 mt-2"
              src={author.img}
              alt="author-image"
            />
          </div>
          <div>
            <h4 className="textarea-lg font-bold m-0 p-0">{author.name}</h4>
            <p>{author.published_date}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <span>
            <CiBookmark className="w-8 h-9"></CiBookmark>
          </span>
          <span>
            <CiShare2 className="w-8 h-9"></CiShare2>
          </span>
        </div>
      </div>
      <div className="mt-8 ">
        <h1 className=" text-2xl font-bold ml-3 mb-4">{title}</h1>
        <img src={image_url} alt="" />
        {/* <p className="my-4">
        {details}
        </p> */}
        {details.length > 200 ? (
          <p className="my-6">
            {details.slice(0, 400)}{" "}
            <Link
              to={`/news/${category_id}`}
              className="ml-3 text-xl text-red-500 underline hover:text-green-500"
            >
              Read More
            </Link>{" "}
          </p>
        ) : (
          <p className="my-6">{details}</p>
        )}
        <hr />
        <div className="flex justify-between">
          <div className="mt-4 flex">
            <CiStar className="w-6 h-6 text-[#FF8C47]"></CiStar>
            <CiStar className="w-6 h-6 text-[#FF8C47]"></CiStar>
            <CiStar className="w-6 h-6 text-[#FF8C47]"></CiStar>
            <CiStar className="w-6 h-6 text-[#FF8C47]"></CiStar>
            <CiStar className="w-6 h-6 text-[#FF8C47]"></CiStar>
            <p className="ml-3">{rating.number}</p>
          </div>

          <div className="mt-4 flex space-x-3">
            <FaEye className="w-5 h-5"></FaEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
