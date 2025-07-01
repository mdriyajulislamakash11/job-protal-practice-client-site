import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const MyApplication = () => {

    const [jobs, setJobs] = useState([])
    const {user} = useContext(AuthContext)
    
    // 
    useEffect(() => {
        fetch(`http://localhost:5000/job-Application?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [user.email])


    return (
        <div>
            <p>my applications: {jobs.length}</p>
        </div>
    );
};

export default MyApplication;