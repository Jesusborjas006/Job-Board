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
    <div className="border border-black">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <ul>
        <li>{salary}</li>
        <li>{job}</li>
        <li>{level}</li>
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default JobListing;
