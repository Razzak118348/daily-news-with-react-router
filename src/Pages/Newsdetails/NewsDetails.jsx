import React from 'react';
import Header from '../Share/Header/Header';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RightSideNav from '../Share/RightSideNav/RightSideNav';
import Navbar from '../Share/Navbar/Navbar';
import { FaArrowLeft } from 'react-icons/fa6';
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const NewsDetails = () => {
    const { id } = useParams()
    // console.log('hi this is newsdetails')
    const AllNews = useLoaderData()
    // console.log(AllNews)
const selectedNews = AllNews.find(news => news._id === id)
console.log(selectedNews)
const {image_url, title, details,rating, total_view} =selectedNews;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                <div className="col-span-3">
<h2 className='text-2xl font-bold ml-3 mb-4'>Daily News</h2>
<img src={image_url} alt="news image " />
<h1 className=" text-2xl font-bold ml-3 mt-4">{title}</h1>

<div className="flex justify-center items-center"><p className="my-6 lg:w-2/3">{details}</p></div>

<div className='flex-1 w-1/2 md:ml-44 mb-10'>

        <div className="flex justify-between space-x-10 md:space-x-0">
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

<div className='flex items-center justify-center'>
<Link className='p-3 text-white bg-red-600 flex w-44 rounded-xl' to={'/'}><FaArrowLeft className='w-6 h-6'></FaArrowLeft>Back To Home</Link>
</div>

                </div>


                <div className='mt-8 lg:mt-0'>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;