import PropTypes from "prop-types";

const ApplicationTable = ({ data }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Under Review":
        return "text-yellow-500";
      case "Interviewing":
        return "text-blue-500";
      case "Offer Extended":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Job Title</th>
            <th className="py-2 px-4 text-left">Company</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((application) => (
            <tr key={application.id} className="border-t">
              <td className="py-3 px-4">{application.jobTitle}</td>
              <td className="py-3 px-4">{application.companyName}</td>
              <td className={`py-3 px-4 ${getStatusClass(application.status)}`}>
                {application.status}
              </td>
              <td className="py-3 px-4">{application.appliedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ApplicationTable.propTypes = {
  data: PropTypes.array,
};

export default ApplicationTable;
