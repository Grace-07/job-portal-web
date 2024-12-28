import { format } from "date-fns";
import _ from "lodash";
import PropTypes from "prop-types";

const ApplicantList = ({ data }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "on-progress":
        return "bg-yellow-500 text-white";
      case "applied":
        return "bg-blue-500 text-white";
      case "completed":
        return "bg-green-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="space-y-4">
      {data.map((applicant) => (
        <div
          key={applicant.id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-xl font-semibold capitalize">{applicant.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{applicant.position}</p>
              </div>
            </div>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full capitalize ${getStatusClass(
                applicant.status
              )}`}
            >
              {applicant.status}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Email: {applicant.email}</p>
            <p className="text-sm text-gray-500">
              Applied on:{" "}
              {format(
                new Date(_.get(applicant, "appliedDate", null)),
                "MMMM dd, yyyy"
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

ApplicantList.propTypes = {
  data: PropTypes.array,
};

export default ApplicantList;
