import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
    return (
        <div className='px-10 bg-[#eaeced]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;