import { Listing } from "../types";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { BsCalendar3 } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

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
      <div className="absolute top-5 right-5 hover:bg-gray-100 p-2 rounded-full">
        <AiOutlineHeart size={20} />
      </div>
      <ul className="flex text-xs font-semibold mt-2 mb-4 gap-x-2">
        <li className="bg-gray-100 rounded-full py-1 px-3 flex items-center">
          <LiaMoneyBillSolid className="mr-1" size={20} />${salary}
        </li>
        <li className="bg-gray-100 rounded-full py-1 px-3 flex items-center">
          <BsCalendar3 className="mr-2" size={16} />
          {job}
        </li>
        <li className="bg-gray-100 rounded-full py-1 px-3 flex items-center">
          <RiGraduationCapLine className="mr-1" size={16} />
          {level}
        </li>
      </ul>
      <div className="flex flex-col h-[100px] justify-between">
        <p>{description}</p>
        <button className="bg-black text-white rounded-md py-2 px-4 text-sm font-semibold self-end">
          View More
        </button>
      </div>
    </div>
  );
};

export default JobListing;
