import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayOute = () => {
    return (
        <div>
            
            {/* Navbar */}
            <Navbar />

            {/* dynamic pages */}
            <div>
                <Outlet />
            </div>



        </div>
    );
};

export default MainLayOute;