import _ from "lodash";
import PropTypes from "prop-types";
import { JOB_FUNCTION, JOB_INDUSTRY, JOB_LEVEL } from "../../constant/lists";

const JobDetails = ({ data }) => {
  const getLevel = (value) => {
    const selectedLevel = JOB_LEVEL.find((level) =>
      _.isEqual(level.value, value)
    );

    return _.get(selectedLevel, "label", "");
  };

  const getFunction = (value) => {
    const selectedLevel = JOB_FUNCTION.find((level) =>
      _.isEqual(level.value, value)
    );

    return _.get(selectedLevel, "label", "");
  };

  const getIndustry = (value) => {
    const selectedLevel = JOB_INDUSTRY.find((level) =>
      _.isEqual(level.value, value)
    );

    return _.get(selectedLevel, "label", "");
  };

  const address = `${_.get(data, "companyId.address.street", "")} ${_.get(
    data,
    "companyId.address.city",
    ""
  )} ${_.get(data, "companyId.address.region", "")} ${_.get(
    data,
    "companyId.address.postalCode",
    ""
  )}, ${_.get(data, "companyId.address.country", "")}`;

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Job Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida praesent
          curae imperdiet class turpis commodo sem, maecenas placerat.{" "}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "description")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Function</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {getFunction(_.get(data, "function"))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Level</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {getLevel(_.get(data, "level"))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Vacancy</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "vacancy")}
            </dd>
          </div>
        </dl>
      </div>

      <div className="px-4 sm:px-0 mt-10">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Company Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida praesent
          curae imperdiet class turpis commodo sem, maecenas placerat.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "companyId.name")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "companyId.description")}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Industry</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {getIndustry(_.get(data, "companyId.industry"))}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Website</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "companyId.website")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {address}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

JobDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JobDetails;
