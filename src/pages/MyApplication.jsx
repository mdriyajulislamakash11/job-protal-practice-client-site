import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  console.log(jobs)

  // ডেটা ফেচ করো
  useEffect(() => {
    fetch(`http://localhost:5000/job-Application?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <p className="text-center mt-10">Loading applications...</p>;
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No applications found.
      </div>
    );
  }

  return (
    <div className="m-10">
      <h2 className="text-2xl font-semibold mb-4">
        My Applications: {jobs.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Head */}
          <thead className="bg-base-200">
            <tr>
              <th>Company Logo</th>
              <th>Job Title</th>
              <th>Category</th>
              <th>Applicant</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="Company Logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company_name}</div>
                      <div className="text-sm opacity-50">{job.company_location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>
                  <div className="font-medium">{job.applicant_name}</div>
                  <div className="text-sm opacity-60">{job.applicant_email}</div>
                </td>
                <td>
                  <button className="btn btn-outline btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
