import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-5  max-w-7xl lg:mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;