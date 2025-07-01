import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayOute = () => {
    return (
        <div>
            

            {/* dynamic pages */}
            <div>
                <Outlet />
            </div>



        </div>
    );
};

export default MainLayOute;