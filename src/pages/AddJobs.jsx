import React from "react";

const AddJobs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const job = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.deadline.value,
      salaryRange: {
        min: form.salaryMin.value,
        max: form.salaryMax.value,
      },
      description: form.description.value,
      company: form.company.value,
      company_logo: form.logo.value,
      hr_email: form.hr_email.value,
      hr_name: form.hr_name.value,
      requirements: form.requirements.value.split(","), 
      responsibilities: form.responsibilities.value.split(","),
      status: "active",
    };

    console.log("New Job Data:", job);

    // fetch to backend:
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Job Added:", data);
        form.reset();
        alert("Job posted successfully!");
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg my-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" type="text" placeholder="Job Title" className="input input-bordered w-full" required />
        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />
        <select name="jobType" className="select select-bordered w-full" required>
          <option disabled selected>
            Select Job Type
          </option>
          <option>Remote</option>
          <option>Onsite</option>
          <option>Hybrid</option>
        </select>
        <input name="category" type="text" placeholder="Category (e.g. Engineering)" className="input input-bordered w-full" required />
        <input name="deadline" type="date" className="input input-bordered w-full" required />
        <input name="salaryMin" type="number" placeholder="Min Salary" className="input input-bordered w-full" required />
        <input name="salaryMax" type="number" placeholder="Max Salary" className="input input-bordered w-full" required />
        <input name="company" type="text" placeholder="Company Name" className="input input-bordered w-full" required />
        <input name="logo" type="url" placeholder="Company Logo URL" className="input input-bordered w-full" required />
        <input name="hr_name" type="text" placeholder="HR Name" className="input input-bordered w-full" required />
        <input name="hr_email" type="email" placeholder="HR Email" className="input input-bordered w-full" required />

        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered col-span-1 md:col-span-2"
          required
        ></textarea>

        <textarea
          name="requirements"
          placeholder="Requirements (comma separated)"
          className="textarea textarea-bordered col-span-1 md:col-span-2"
          required
        ></textarea>

        <textarea
          name="responsibilities"
          placeholder="Responsibilities (comma separated)"
          className="textarea textarea-bordered col-span-1 md:col-span-2"
          required
        ></textarea>

        <div className="col-span-1 md:col-span-2 text-center">
          <button type="submit" className="btn btn-primary w-1/2 mt-4">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
