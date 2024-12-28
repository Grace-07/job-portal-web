import { useQuery } from "react-query";

import * as apiClient from "../../api-client";

import ApplicantList from "../../components/job/ApplicantList";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Title from "../../components/Title";
import { useAppContext } from "../../contexts/AppContext";
import _ from "lodash";
import { useEffect, useState } from "react";

const JobApplicants = () => {
  //   const applicants = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       position: "Frontend Developer",
  //       email: "john.doe@example.com",
  //       status: "Under Review",
  //       appliedDate: "2024-10-15",
  //     },
  //     {
  //       id: 2,
  //       name: "Jane Smith",
  //       position: "Backend Developer",
  //       email: "jane.smith@example.com",
  //       status: "Interviewing",
  //       appliedDate: "2024-11-01",
  //     },
  //     {
  //       id: 3,
  //       name: "Emily Johnson",
  //       position: "UI/UX Designer",
  //       email: "emily.johnson@example.com",
  //       status: "Offer Extended",
  //       appliedDate: "2024-09-10",
  //     },
  //     {
  //       id: 4,
  //       name: "Michael Brown",
  //       position: "Data Scientist",
  //       email: "michael.brown@example.com",
  //       status: "Rejected",
  //       appliedDate: "2024-07-25",
  //     },
  //   ];

  const [search, setSearch] = useState("");
  const [filteredApplicantList, setFilteredApplicantList] = useState([]);

  const { user } = useAppContext();

  const id = _.get(user, "companyId");

  const { data: applicants } = useQuery(
    "fetchApplications",
    apiClient.fetchApplications
  );

  console.log("applicants", applicants);

  const formattedData = filteredApplicantList.map((app) => ({
    id: _.get(app, "_id"),
    name: `${_.get(app, "employeeId.firstName")} ${_.get(
      app,
      "employeeId.lastName"
    )}`,
    position: _.get(app, "position"),
    email: _.get(app, "employeeId.emailAddress"),
    status: _.get(app, "status"),
    appliedDate: _.get(app, "createdAt", null),
  }));

  useEffect(() => {
    if (!_.isEmpty(applicants)) {
      const filteredData = (applicants || []).filter((app) =>
        _.isEqual(_.get(app, "jobId.companyId"), id)
      );

      if (!_.isEmpty(search)) {
        const searchApplication = filteredData.filter((app) =>
          _.lowerCase(_.get(app, "jobId.position")).includes(
            _.lowerCase(search)
          )
        );
        setFilteredApplicantList(searchApplication);
      } else {
        setFilteredApplicantList(filteredData);
      }
    }
  }, [search, applicants, id]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-5">
          <Title text="My Job Applicants" />
        </div>
        <Search onSearch={setSearch} />
        <div className="max-w-4xl mx-auto p-6">
          <ApplicantList data={formattedData} />
        </div>
      </div>
    </div>
  );
};

export default JobApplicants;
