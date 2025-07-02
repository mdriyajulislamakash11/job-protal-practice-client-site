import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
const application = useLoaderData()
    console.log(application)

    return (
        <div>
            
        </div>
    );
};

export default ViewApplication;