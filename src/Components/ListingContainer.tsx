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
    <section className="max-w-[1600px] p-8 mx-auto grid grid-cols-1 min-[870px]:grid-cols-2 2xl:grid-cols-3 gap-4">
      {jobElements}
    </section>
  );
};

export default ListingContainer;
