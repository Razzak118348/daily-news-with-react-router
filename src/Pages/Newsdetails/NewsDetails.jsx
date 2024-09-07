import React from 'react';
import Header from '../Share/Header/Header';
import { useParams } from 'react-router-dom';
import RightSideNav from '../Share/RightSideNav/RightSideNav';
import Navbar from '../Share/Navbar/Navbar';

const NewsDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           

                <div className="col-span-3">
                    <img src="" alt="" />
                    <p>{id} </p>
                </div>
               

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;