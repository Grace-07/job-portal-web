import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

import Navbar from "../../components/Navbar";
import Search from "../../components/Search";

import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import { APPLICANT, EMPLOYER } from "../../constant/variable";
import { useEffect, useState } from "react";
import Title from "../../components/Title";

const Jobs = () => {
  const { showNotification, user, isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const isApplicant = _.get(user, "type") === APPLICANT || false;
  const isEmployer = _.get(user, "type") === EMPLOYER || false;

  const [search, setSearch] = useState("");
  const [filteredJobList, setFilteredJobList] = useState([]);

  console.log("search", search);

  // const cardData = [
  //   {
  //     id: 1,
  //     title: "Card Title 1",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  //     imageUrl: "https://via.placeholder.com/300",
  //     time: "2 hours ago",
  //     buttonText: "Learn More",
  //     buttonColor: "bg-blue-500",
  //   },
  //   {
  //     id: 2,
  //     title: "Card Title 2",
  //     description:
  //       "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
  //     imageUrl: "https://via.placeholder.com/300",
  //     time: "1 day ago",
  //     buttonText: "Learn More",
  //     buttonColor: "bg-green-500",
  //   },
  //   {
  //     id: 3,
  //     title: "Card Title 3",
  //     description:
  //       "Mauris a ante euismod, elementum lorem eu, auctor lorem. Curabitur pretium tincidunt lacus. Integer euismod risus lorem.",
  //     imageUrl: "https://via.placeholder.com/300",
  //     time: "5 minutes ago",
  //     buttonText: "Learn More",
  //     buttonColor: "bg-red-500",
  //   },
  //   {
  //     id: 4,
  //     title: "Card Title 4",
  //     description:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  //     imageUrl: "https://via.placeholder.com/300",
  //     time: "3 days ago",
  //     buttonText: "Learn More",
  //     buttonColor: "bg-yellow-500",
  //   },
  // ];

  const { data: jobs } = useQuery("fetchJobs", apiClient.fetchJobs, {
    onError: (error) => {
      showNotification({ message: error.message, type: "error" });
    },
  });

  const calculateDaysPassed = (date) => {
    const now = new Date();
    const targetDate = new Date(date);

    // Calculate the difference in milliseconds
    const diffInMs = now - targetDate;

    // Convert milliseconds to days
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return days;
  };

  const jobList = (filteredJobList || []).map((job) => ({
    id: _.get(job, "_id"),
    title: _.get(job, "position"),
    description: _.get(job, "companyId.name"),
    imageUrl: "https://via.placeholder.com/300",
    time:
      calculateDaysPassed(_.get(job, "createdAt", null)) > 0
        ? `Posted ${calculateDaysPassed(
            _.get(job, "createdAt", null)
          )} day(s) ago`
        : "Posted today",
  }));

  console.log("jobs", jobs);

  const handleApply = (id) => {
    if (isLoggedIn) {
      navigate(`/jobs/${id}/apply`);
    } else {
      navigate("/login");
    }
  };

  const handleView = (e, id) => {
    if (e.target && e.target.nodeName !== "BUTTON") {
      navigate(`/jobs/${id}`);
    }
  };

  useEffect(() => {
    if (!_.isEmpty(jobs)) {
      const filteredJobs = isEmployer
        ? (jobs || []).filter((job) =>
            _.isEqual(_.get(job, "employerId"), _.get(user, "_id"))
          )
        : (jobs || []).filter(
            (job) =>
              _.get(job, "isActive", false) &&
              calculateDaysPassed(_.get(job, "expirationDate", null)) < 1
          );

      console.log("filteredJobs", filteredJobs);

      if (!_.isEmpty(search)) {
        const searchJobs = filteredJobs.filter((job) =>
          _.lowerCase(_.get(job, "title")).includes(_.lowerCase(search))
        );
        setFilteredJobList(searchJobs);
      } else {
        setFilteredJobList(filteredJobs);
      }
    }
  }, [jobs, search, user, isEmployer]);

  console.log("filteredJobList", filteredJobList);
  console.log("user", user);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-5">
          <Title text="Find a Job" />
        </div>
        <Search onSearch={setSearch} />
        <div>
          <div className="max-w-screen-xl mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobList.map((card) => (
                <div
                  id={card.id}
                  key={card.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                  onClick={(e) => handleView(e, card.id)}
                >
                  {/* <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  /> */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{card.time}</span>
                      {/* <button
                        className={`${card.buttonColor} text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-80 focus:outline-none`}
                      >
                        {card.buttonText}
                      </button> */}
                      {(isApplicant || !isLoggedIn) && (
                        <button
                          onClick={() => handleApply(card.id)}
                          className={`bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-80 focus:outline-none`}
                        >
                          Apply Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
