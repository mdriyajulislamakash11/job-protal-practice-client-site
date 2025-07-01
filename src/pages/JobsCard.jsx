import React from 'react';

const JobCard = ({ job }) => {
  const {
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
  } = job;

  return (
    <div className="bg-white rounded-xl shadow-md border p-6 border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Top Section: Logo + Title */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain rounded"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
          <span
            className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
              status === 'active'
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Job Info */}
      <div className="text-sm text-gray-600 flex flex-wrap gap-3">
        <span>📍 <strong>Location:</strong> {location}</span>
        <span>💼 <strong>Type:</strong> {jobType}</span>
        <span>🗂️ <strong>Category:</strong> {category}</span>
        <span>📅 <strong>Deadline:</strong> {applicationDeadline}</span>
        <span>💰 <strong>Salary:</strong> {salaryRange?.min} - {salaryRange?.max} BDT</span>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-700 text-sm">
          <strong>Description:</strong> {description}
        </p>
      </div>

      {/* Requirements */}
      <div>
        <p className="text-gray-800 font-semibold mb-1">Requirements:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <p className="text-gray-800 font-semibold mb-1">Responsibilities:</p>
        <ul className="list-decimal list-inside text-sm text-gray-700 space-y-1">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Info */}
      <div className="text-sm text-gray-600">
        <p><strong>HR Name:</strong> {hr_name}</p>
        <p><strong>HR Email:</strong> {hr_email}</p>
      </div>

      {/* Apply Button */}
      <div className="text-right">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
