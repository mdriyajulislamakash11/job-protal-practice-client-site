import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(jobs)

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user?.email]);

  return (
    <div className="m-20">
      
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Application Count</th>
              <th>Applications</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={index} className="bg-base-200 ">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <p className="text-blue-800 font-bold">View Applications</p>
                </td>
                <td>
                  <button className="btn px-10">E</button>
                  <button className="btn px-10">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
