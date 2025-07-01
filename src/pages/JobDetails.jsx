import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    hr_email,
    hr_name,
    status,
  } = useLoaderData();

  return (
    <div className="w-11/12 max-w-5xl mx-auto py-10 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b pb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-contain rounded border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company}</p>
          <span
            className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
              status === "active"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Job Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
        <p>
          📍 <strong>Location:</strong> {location}
        </p>
        <p>
          💼 <strong>Type:</strong> {jobType}
        </p>
        <p>
          🗂️ <strong>Category:</strong> {category}
        </p>
        <p>
          📅 <strong>Deadline:</strong> {applicationDeadline}
        </p>
        <p>
          💰 <strong>Salary:</strong> {salaryRange?.min} - {salaryRange?.max}{" "}
          BDT
        </p>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          📄 Description
        </h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          ✅ Requirements
        </h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🛠️ Responsibilities
        </h2>
        <ul className="list-decimal list-inside space-y-1 text-sm text-gray-700">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="border-t pt-4 text-sm text-gray-600">
        <p>
          👤 <strong>HR Name:</strong> {hr_name}
        </p>
        <p>
          📧 <strong>Email:</strong> {hr_email}
        </p>
      </div>

      {/* Apply Button */}
      <div className="pt-6 text-right">
        <Link to={`/jobApply/${_id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
