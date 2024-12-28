import { PaperClipIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { APPLICANT } from "../../constant/variable";

const ProfileDetails = ({ data }) => {
  // const workExperience = [
  //   {
  //     title: "Software Engineer",
  //     company: "Tech Solutions Inc.",
  //     date: "Jan 2021 - Present",
  //     description:
  //       "Developing and maintaining web applications using React and Node.js.",
  //   },
  //   {
  //     title: "Frontend Developer",
  //     company: "Web Creators",
  //     date: "Mar 2019 - Dec 2020",
  //     description:
  //       "Designed and implemented user interfaces using React and Tailwind CSS.",
  //   },
  //   {
  //     title: "Intern Developer",
  //     company: "Startup Hub",
  //     date: "Jun 2018 - Aug 2018",
  //     description:
  //       "Collaborated on developing an internal dashboard using JavaScript and PHP.",
  //   },
  // ];

  // const educationBackground = [
  //   {
  //     degree: "Bachelor of Science in Computer Science",
  //     institution: "University of Tech",
  //     date: "2015 - 2019",
  //     description:
  //       "Studied computer science fundamentals including algorithms, data structures, and software engineering.",
  //   },
  //   {
  //     degree: "High School Diploma",
  //     institution: "Tech High School",
  //     date: "2011 - 2015",
  //     description:
  //       "Focus on science and mathematics with extracurricular involvement in the tech club.",
  //   },
  // ];

  const isApplicant = _.get(data, "type") === APPLICANT || false;

  const name = `${_.get(data, "firstName")} ${_.get(data, "lastName")}`;

  const formattedDate = format(
    new Date(_.get(data, "birthday", null)),
    "MMMM dd, yyyy"
  ); // "Month day, Year"

  const address = `${_.get(data, "address.street")} ${_.get(
    data,
    "address.city"
  )} ${_.get(data, "address.region")} ${_.get(
    data,
    "address.postalCode"
  )}, ${_.get(data, "address.country")}`;

  const hasWorkExp = _.has(data, "workExperiences");
  const hasEducBg = _.has(data, "workExperiences");
  const hasAttachment = false;

  console.log("hasWorkExp", hasWorkExp)

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Profile Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida praesent
          curae imperdiet class turpis commodo sem, maecenas placerat.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Username</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "username", "")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "about", "")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Email Address
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "emailAddress", "")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Contact Number
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {_.get(data, "contactNumber", "")}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Birthday</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formattedDate}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {address}
            </dd>
          </div>

          {isApplicant && hasEducBg && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Educational Background
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="space-y-6">
                  {_.get(data, "educationalBackground", []).map((education, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-green-500 pl-4 py-4"
                    >
                      <h3 className="font-semibold">{_.get(education, "degree", "")}</h3>
                      <p className="text-gray-600">{_.get(education, "institution", "")}</p>
                      <p className="text-sm text-gray-500">{_.get(education, "date", "")}</p>
                      <p className="mt-2 text-gray-700">
                        {_.get(education, "description", "")}
                      </p>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}

          {isApplicant && hasWorkExp && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Work Experience
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul className="space-y-6">
                  {_.get(data, "workExperiences", []).map((experience, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-blue-500 pl-4 py-4"
                    >
                      <h3 className="font-semibold">{_.get(experience, "title", "")}</h3>
                      <p className="text-gray-600">{_.get(experience, "company", "")}</p>
                      <p className="text-sm text-gray-500">{_.get(experience, "date", "")}</p>
                      <p className="mt-2 text-gray-700">
                        {_.get(experience, "description", "")}
                      </p>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}

          {hasAttachment && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Attachments
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-400"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          resume_back_end_developer.pdf
                        </span>
                        <span className="shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-400"
                      />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">
                          coverletter_back_end_developer.pdf
                        </span>
                        <span className="shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

ProfileDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProfileDetails;
