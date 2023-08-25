import { Listing } from "../types";
import JobListing from "./JobListing";

type ListingContainerProps = {
  allJobListings: Listing[];
};

const ListingContainer = ({ allJobListings }: ListingContainerProps) => {
  console.log(allJobListings);
  const jobElements = allJobListings.map((job) => (
    <JobListing
      id={job.id}
      title={job.title}
      company={job.company}
      location={job.location}
      salary={job.salary}
      job={job.job}
      level={job.level}
      description={job.description}
      key={job.id}
    />
  ));
  return (
    <section className="border border-red-600 text-center">
      <h2>Job Listing Container</h2>
      {jobElements}
    </section>
  );
};

export default ListingContainer;
