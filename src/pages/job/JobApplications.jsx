import { useQuery } from "react-query";

import * as apiClient from "../../api-client";

import ApplicationList from "../../components/job/ApplicationList";
// import ApplicationTable from "../../components/job/ApplicationTable";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Title from "../../components/Title";
import { useAppContext } from "../../contexts/AppContext";
import _ from "lodash";
import { useEffect, useState } from "react";
const JobApplications = () => {
  const { user } = useAppContext();
  const [search, setSearch] = useState("");
  const [filteredApplicationList, setFilteredApplicationList] = useState([]);

  const id = _.get(user, "_id");

  const { data: applications } = useQuery(
    "fetchApplicationByUser",
    () => apiClient.fetchApplicationByUser(id || ""),
    {
      enabled: !!id,
    }
  );

  console.log("applications", applications);
  console.log("user", user);

  const formattedData = (filteredApplicationList || []).map((app) => ({
    id: _.get(app, "_id"),
    jobTitle: _.get(app, "jobId.position"),
    companyName: _.get(app, "jobId.companyId.name"),
    status: _.get(app, "status"),
    appliedDate: _.get(app, "createdAt"),
    location: _.get(app, "jobId.companyId.address.city"),
  }));

  // const jobApplications = [
  //   {
  //     id: 1,
  //     jobTitle: "Frontend Developer",
  //     companyName: "Tech Innovators",
  //     status: "Under Review",
  //     appliedDate: "2024-10-15",
  //     location: "New York, NY",
  //   },
  //   {
  //     id: 2,
  //     jobTitle: "Backend Developer",
  //     companyName: "Web Solutions",
  //     status: "Interviewing",
  //     appliedDate: "2024-11-02",
  //     location: "San Francisco, CA",
  //   },
  //   {
  //     id: 3,
  //     jobTitle: "UI/UX Designer",
  //     companyName: "Creative Designs",
  //     status: "Offer Extended",
  //     appliedDate: "2024-09-10",
  //     location: "Remote",
  //   },
  //   {
  //     id: 4,
  //     jobTitle: "Data Scientist",
  //     companyName: "DataCorp",
  //     status: "Rejected",
  //     appliedDate: "2024-07-01",
  //     location: "Austin, TX",
  //   },
  // ];

  // const jobApplications = [
  //   {
  //     id: 1,
  //     jobTitle: "Frontend Developer",
  //     companyName: "Tech Innovators",
  //     status: "Under Review",
  //     appliedDate: "2024-10-15",
  //   },
  //   {
  //     id: 2,
  //     jobTitle: "Backend Developer",
  //     companyName: "Web Solutions",
  //     status: "Interviewing",
  //     appliedDate: "2024-11-02",
  //   },
  //   {
  //     id: 3,
  //     jobTitle: "UI/UX Designer",
  //     companyName: "Creative Designs",
  //     status: "Offer Extended",
  //     appliedDate: "2024-09-10",
  //   },
  //   {
  //     id: 4,
  //     jobTitle: "Data Scientist",
  //     companyName: "DataCorp",
  //     status: "Rejected",
  //     appliedDate: "2024-07-01",
  //   },
  // ];

  useEffect(() => {
    if (!_.isEmpty(applications)) {
      if (!_.isEmpty(search)) {
        const searchApplication = applications.filter((app) =>
          _.lowerCase(_.get(app, "jobId.position")).includes(
            _.lowerCase(search)
          )
        );
        setFilteredApplicationList(searchApplication);
      } else {
        setFilteredApplicationList(applications);
      }
    }
  }, [search, applications]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-5">
          <Title text="My Job Applications" />
        </div>
        <Search onSearch={setSearch} />
        <div className="max-w-4xl mx-auto p-6">
          <ApplicationList data={formattedData} />
        </div>
        {/* <ApplicationTable  data={jobApplications} /> */}
      </div>
    </div>
  );
};

export default JobApplications;
