import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  JOB_FUNCTION,
  JOB_LEVEL,
  JOB_SETUP,
  JOB_TYPE,
  PAYMENT_PERIOD,
} from "../../constant/lists";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const JobForm = ({
  handleSubmit,
  handleCancel,
  errors,
  register,
  setValue,
  getValues,
}) => {
  const initStat = getValues("isActive") || false;
  const [isActive, setIsActive] = useState(initStat);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    setValue("isActive", isActive);
  }, [isActive, setValue]);

  return (
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Primary Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="position"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Title / Position
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      placeholder="ex. Manager"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      {...register("position", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.position && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.position.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                    {...register("description", {
                      required: "This field is required",
                    })}
                  />
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">
                  Write a few sentences about the job position.
                </p>
                {errors.description && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Secondary Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="level"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Level
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    autoComplete="level"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("level", {
                      required: "This field is required",
                    })}
                  >
                    {JOB_LEVEL.map((level, index) => (
                      <option key={index} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="type"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Type
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    autoComplete="type"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("type", {
                      required: "This field is required",
                    })}
                  >
                    {JOB_TYPE.map((level, index) => (
                      <option key={index} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="function"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Function
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    autoComplete="function"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("function", {
                      required: "This field is required",
                    })}
                  >
                    {JOB_FUNCTION.map((level, index) => (
                      <option key={index} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="setup"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Setup
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    autoComplete="setup"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("setup", {
                      required: "This field is required",
                    })}
                  >
                    {JOB_SETUP.map((level, index) => (
                      <option key={index} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="vacancy"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Vacancy
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    min={1}
                    autoComplete="vacancy"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("vacancy", {
                      required: "This field is required",
                    })}
                  />
                </div>
                {errors.vacancy && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.vacancy.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="period"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Expiration Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    autoComplete="expirationDate"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("expirationDate", {
                      required: "This field is required",
                    })}
                  />
                </div>
                {errors.expirationDate && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.expirationDate.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="salaryPay"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Salary Pay
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                      $
                    </div>
                    <input
                      type="number"
                      min={1}
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      {...register("salaryPay", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                </div>
                {errors.salaryPay && (
                  <p className="mt-3 text-sm/6 text-red-500">
                    {errors.salaryPay.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="payPeriod"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Pay Period
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    autoComplete="payPeriod"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("payPeriod", {
                      required: "This field is required",
                    })}
                  >
                    {PAYMENT_PERIOD.map((level, index) => (
                      <option key={index} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="period"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  is Active ?
                </label>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={handleToggle}
                    className={`relative inline-flex items-center w-16 h-8 rounded-full transition-all duration-300 ${
                      isActive ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    {/* Circle inside the toggle */}
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                        isActive ? "transform translate-x-8" : ""
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
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

JobForm.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.any,
  register: PropTypes.any,
  watch: PropTypes.any,
  setValue: PropTypes.any,
  control: PropTypes.any,
  getValues: PropTypes.any,
};

export default JobForm;
