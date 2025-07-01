import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayOute = () => {
    return (
        <div>
            
            {/* Navbar */}
            <Navbar />

            {/* dynamic pages */}
            <div>
                <Outlet />
            </div>

            {/* Footer */}
            <div className='mt-10'>
                <Footer />
            </div>

        </div>
    );
};

export default MainLayOute;