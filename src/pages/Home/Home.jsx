import React from 'react';
import Bannar from '../../components/Bannar';
import HotJobs from '../HotJobs';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div>
                <Bannar />
            </div>

            {/* Hot Jobs Card */}
            <div>
                <HotJobs />
            </div>
        </div>
    );
};

export default Home;