import { format } from "date-fns";
import _ from "lodash";
import PropTypes from "prop-types";

const ApplicationList = ({ data }) => {
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
      {data.map((application) => (
        <div
          key={application.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold capitalize">
              {application.jobTitle}
            </h3>
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full capitalize ${getStatusClass(
                application.status
              )}`}
            >
              {application.status}
            </span>
          </div>
          <p className="text-gray-500 capitalize">{application.companyName}</p>
          <p className="text-gray-400 text-sm capitalize">
            {application.location}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Applied on{" "}
            {format(
              new Date(_.get(application, "appliedDate", null)),
              "MMMM dd, yyyy"
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

ApplicationList.propTypes = {
  data: PropTypes.array,
};

export default ApplicationList;
