import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  HeartIcon,
  ShareIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useAppContext } from "../../contexts/AppContext";
import { APPLICANT, EMPLOYER } from "../../constant/variable";
import * as apiClient from "../../api-client";

import JobDetails from "../../components/job/JobDetails";
import Navbar from "../../components/Navbar";
import { format } from "date-fns";

const Job = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAppContext();
  const { id } = useParams();

  const isEmployer = _.get(user, "type") === EMPLOYER;
  const isApplicant = _.get(user, "type") === APPLICANT;

  const { data: job } = useQuery(
    "fetchMyHotelById",
    () => apiClient.getJob(id || ""),
    {
      enabled: !!id,
    }
  );

  const handleEdit = () => navigate(`/jobs/${id}/edit`);
  const handleApply = () => {
    if (isLoggedIn) {
      navigate(`/jobs/${id}/apply`);
    } else {
      navigate("/login");
    }
  };

  console.log("job", job);

  const isActive = _.get(job, "isActive", false);

  const formattedDate = format(
    new Date(_.get(job, "expirationDate", null)),
    "MMMM dd, yyyy"
  ); // "Month day, Year"

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <div className="lg:flex lg:items-center lg:justify-between mb-10">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {_.get(job, "position", "")}
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500 capitalize">
                <BriefcaseIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                />
                {_.get(job, "type", "")}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 capitalize">
                <MapPinIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                />
                {_.get(job, "setup", "")}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 capitalize">
                <CurrencyDollarIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                />
                {/* $120k &ndash; $140k */}
                {`$${_.get(job, "salaryPay", "")} ${_.get(
                  job,
                  "payPeriod",
                  ""
                )}`}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon
                  aria-hidden="true"
                  className="mr-1.5 size-5 shrink-0 text-gray-400"
                />
                Closing on {formattedDate}
              </div>
            </div>
          </div>
          <div className="mt-5 flex lg:ml-4 lg:mt-0">
            {(isApplicant || !isLoggedIn) && (
              <>
                <span className="hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <HeartIcon
                      aria-hidden="true"
                      className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                    />
                    Save
                  </button>
                </span>

                <span className="ml-3 hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <ShareIcon
                      aria-hidden="true"
                      className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                    />
                    Share
                  </button>
                </span>
              </>
            )}

            {isEmployer && (
              <>
                <span className="ml-3 hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={handleEdit}
                  >
                    <PencilIcon
                      aria-hidden="true"
                      className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                    />
                    Edit
                  </button>
                </span>

                <span className="ml-3 hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    <LinkIcon
                      aria-hidden="true"
                      className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                    />
                    View
                  </button>
                </span>

                {isActive ? (
                  <span className="sm:ml-3">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <XMarkIcon
                        aria-hidden="true"
                        className="-ml-0.5 mr-1.5 size-5"
                      />
                      Unpublish
                    </button>
                  </span>
                ) : (
                  <span className="sm:ml-3">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <CheckIcon
                        aria-hidden="true"
                        className="-ml-0.5 mr-1.5 size-5"
                      />
                      Publish
                    </button>
                  </span>
                )}
              </>
            )}

            {(isApplicant || !isLoggedIn) && (
              <span className="sm:ml-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleApply}
                >
                  <PencilSquareIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5"
                  />
                  Apply Now
                </button>
              </span>
            )}

            {/* Dropdown */}
            <Menu as="div" className="relative ml-3 sm:hidden">
              <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
                More
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1.5 size-5 text-gray-400"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Edit
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    View
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
        {job && <JobDetails data={job} />}
      </div>
    </>
  );
};

export default Job;
