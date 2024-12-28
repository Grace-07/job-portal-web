import PropTypes from "prop-types";
import _ from "lodash";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import { COUNTRY } from "../../constant/lists";

const EmployerRegisterForm = ({
  handleSubmit,
  handleCancel,
  errors,
  register,
  watch,
}) => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                praesent curae imperdiet class turpis commodo sem, maecenas
                placerat.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        type="text"
                        placeholder="johndoe-01"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        {...register("username", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">
                    It should be unique and can contain numbers and symbols.
                  </p>
                  {errors.username && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        type="password"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        {...register("password", {
                          required: "This field is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                    </div>
                  </div>
                  {errors.password && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="username"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        type="password"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        {...register("confirmPassword", {
                          validate: (val) => {
                            if (!val) {
                              return "This field is required";
                            } else if (watch("password") !== val) {
                              return "Your passwords do not match";
                            }
                          },
                        })}
                      />
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("about")}
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                  {errors.about && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.about.message}
                    </p>
                  )}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      aria-hidden="true"
                      className="size-12 text-gray-300"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                praesent curae imperdiet class turpis commodo sem, maecenas
                placerat.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("firstName", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("lastName", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("emailAddress", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.emailAddress && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.emailAddress.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Contact Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoComplete="contact-number"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("contactNumber", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.contactNumber && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Birthday
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      autoComplete="birthday"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("birthday", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.birthday && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {errors.birthday.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("address.country", {
                        required: "This field is required",
                      })}
                    >
                      {COUNTRY.map((country, index) => (
                        <option key={index} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                  {_.get(errors, "address.country") && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {_.get(errors, "address.country.message")}
                    </p>
                  )}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("address.street", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {_.get(errors, "address.street") && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {_.get(errors, "address.street.message")}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("address.city", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {_.get(errors, "address.city") && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {_.get(errors, "address.city.message")}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("address.region", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {_.get(errors, "address.region") && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {_.get(errors, "address.region.message")}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      autoComplete="postal-code"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      {...register("address.postalCode", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {_.get(errors, "address.postalCode") && (
                    <p className="mt-3 text-sm/6 text-red-500">
                      {_.get(errors, "address.postalCode.message")}
                    </p>
                  )}
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
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EmployerRegisterForm.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.any,
  register: PropTypes.any,
  watch: PropTypes.any,
  setValue: PropTypes.any,
  control: PropTypes.any,
  getValues: PropTypes.any,
};

export default EmployerRegisterForm;
