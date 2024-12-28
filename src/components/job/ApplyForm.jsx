import PropTypes from "prop-types";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import { DocumentIcon } from "@heroicons/react/24/solid";
import _ from "lodash";

const ApplyForm = ({
  handleSubmit,
  handleCancel,
  errors,
  register,
  job,
  user
}) => {
  const name = `${_.get(user, "firstName")} ${_.get(user, "lastName")}`
  return (
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Applicant Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-6 border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {name}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Application for
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {_.get(job, "position")}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {_.get(user, "emailAddress")}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Contact Number
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {_.get(user, "contactNumber")}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">About</dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                   {_.get(user, "about")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Additional Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="salary"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Expected Salary
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                      $
                    </div>
                    <input
                      type="number"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      {...register("expectedSalary", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                </div>
                {errors.expectedSalary && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.expectedSalary.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="start-date"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Possible Start Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("startDate", {
                      required: "This field is required",
                    })}
                  />
                </div>
                {errors.startDate && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.startDate.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Attachments
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <DocumentIcon
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          disabled
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                      DOC, DOCX, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mt-4">
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
                        Delete
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
                        Delete
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Uploaded 2 file(s)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

ApplyForm.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.any,
  register: PropTypes.any,
  watch: PropTypes.any,
  setValue: PropTypes.any,
  control: PropTypes.any,
  getValues: PropTypes.any,
  job: PropTypes.object,
  user: PropTypes.object,
};

export default ApplyForm;
