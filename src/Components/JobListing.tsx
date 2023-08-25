import { Listing } from "../types";

const JobListing = ({
  id,
  title,
  company,
  location,
  salary,
  job,
  level,
  description,
}: Listing) => {
  return (
    <div className="border border-gray-300 rounded-lg p-5 relative">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{company}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <ul className="flex text-xs font-semibold mt-2 mb-4 gap-x-2">
        <li className="bg-gray-100 rounded-full py-1 px-2">${salary}</li>
        <li className="bg-gray-100 rounded-full py-1 px-2">{job}</li>
        <li className="bg-gray-100 rounded-full py-1 px-2">{level}</li>
      </ul>
      <p>{description}</p>
      <button className="bg-black text-white rounded-md py-2 px-3 text-sm font-semibold mt-5">
        View More
      </button>
    </div>
  );
};

export default JobListing;
