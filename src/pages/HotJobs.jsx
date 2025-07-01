import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const HotJobs = () => {

    const [jobs, setSobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => {
            setSobs(data)
        })
    }, [])


  return (
    <div>
      <div className="text-center my-16">
        {/* Hot Job Collections title*/}
        <h1 className="text-4xl font-bold">Hot Jobs Collections</h1>
        {/* Hot Job Collections description*/}
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Dignissimos
          inventore doloremque repudiandae?
        </p>
      </div>


        {/* Jobs Card */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
               jobs.map((job) => <JobsCard key={job._Id} job={job} />) 
            }
        </div>


    </div>
  );
};

export default HotJobs;
