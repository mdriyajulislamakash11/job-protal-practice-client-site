import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkdin = form.linkdin.value;
    const resume = form.resume.value;

    const jobApplyer = {
        job_Id: id,
        applicant_email: user.email,
        github,
        linkdin,
        resume,
    }

    fetch(`http://localhost:5000/job-applications`, {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(jobApplyer)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        navigate("/myApplication")
    })

    

  };

  return (
    <div className="my-20 px-4 flex justify-center">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="text-center pt-6">
          <h2 className="text-3xl font-bold text-gray-800">Apply for Job</h2>
          <p className="text-sm text-gray-500">Job ID: {id}</p>
        </div>
        <form onSubmit={handleJobApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">GitHub Profile URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/yourusername"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                LinkedIn Profile URL
              </span>
            </label>
            <input
              type="url"
              name="linkdin"
              placeholder="https://linkedin.com/in/yourname"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Resume URL (Google Drive, etc)
              </span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="https://drive.google.com/..."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
