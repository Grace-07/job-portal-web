import PropTypes from "prop-types";
import { useState } from "react";
import _ from "lodash";
import { useFieldArray } from "react-hook-form";

import { UserCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { COUNTRY } from "../../constant/lists";

const ApplicantRegisterForm = ({
  handleSubmit,
  handleCancel,
  errors,
  register,
  watch,
  control,
  getValues,
}) => {
  // const [education, setEducation] = useState([]);
  // const [workExperience, setWorkExperience] = useState([]);

  //   const [education, setEducation] = useState([
  //     { id: 1, degree: "", institution: "", date: "", description: "" },
  //   ]);
  //   const [workExperience, setWorkExperience] = useState([
  //     { id: 1, title: "", company: "", date: "", description: "" },
  //   ]);

  // const [workLastIndex, setWorkLastIndex] = useState(1);
  // const [educLastIndex, setEducLastIndex] = useState(1);

  const [activeWorkIndex, setActiveWorkIndex] = useState(null);
  const [activeEducIndex, setActiveEducIndex] = useState(null);

  // const handleEducationChange = (index, event) => {
  //   const newEducation = [...education];
  //   newEducation[index][event.target.name] = event.target.value;
  //   setEducation(newEducation);
  // };

  // const handleWorkExperienceChange = (index, event) => {
  //   const newWorkExperience = [...workExperience];
  //   newWorkExperience[index][event.target.name] = event.target.value;
  //   setWorkExperience(newWorkExperience);
  // };

  // const addEducation = () => {
  //   const lastIndex = educLastIndex + 1;

  //   setEducation([
  //     ...education,
  //     { degree: "", institution: "", date: "", description: "" },
  //   ]);
  //   setEducLastIndex(lastIndex);
  // };

  // const addWorkExperience = () => {
  //   const lastIndex = workLastIndex + 1;
  //   setWorkExperience([
  //     ...workExperience,
  //     { id: lastIndex, title: "", company: "", date: "", description: "" },
  //   ]);
  //   setWorkLastIndex(lastIndex);
  // };

  // Toggle section visibility
  const toggleEducSection = (index) => {
    setActiveEducIndex(activeEducIndex === index ? null : index);
  };

  const toggleWorkSection = (index) => {
    setActiveWorkIndex(activeWorkIndex === index ? null : index);
  };

  // // Delete an item from the list
  // const deleteWorkExp = (id) => {
  //   setWorkExperience(workExperience.filter((item) => item.id !== id));
  // };

  // // Delete an item from the list
  // const deleteEducExp = (id) => {
  //   setEducation(education.filter((item) => item.id !== id));
  // };

  const {
    fields: educFields,
    append: educAppend,
    remove: educRemove,
  } = useFieldArray({
    control,
    name: "educationalBackground",
  });

  const {
    fields: workFields,
    append: workAppend,
    remove: workRemove,
  } = useFieldArray({
    control,
    name: "workExperiences",
  });

  console.log("errors", errors);
  console.log("workFields", workFields);
  console.log("workExperiences", getValues(`workExperiences`));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
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

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Educational Background
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <div className="space-y-4">
                  {educFields.map((edu, index) => (
                    <div key={edu.id} className="border rounded-md">
                      <div
                        className="flex justify-between space-x-4 p-4"
                        onClick={() => toggleEducSection(index)}
                      >
                        <h3 className="text-lg font-semibold">
                          {getValues(`educationalBackground.${index}.degree`)}
                        </h3>
                        <div className="flex">
                          <button
                            // onClick={() => deleteEducExp(edu.id)}
                            onClick={() => educRemove(index)}
                            className="text-red-500 hover:text-red-700 focus:outline-none mr-3"
                            type="button"
                          >
                            <TrashIcon className="w-5 h-5 mr-2" />
                          </button>

                          {activeEducIndex === index ? (
                            <ChevronUpIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          ) : (
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className={`transition-all ${
                          activeEducIndex === index ? "block" : "hidden"
                        } p-4 text-gray-700 bg-gray-50`}
                      >
                        <div className="space-y-4 mb-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                className="block text-sm/6 font-medium text-gray-900"
                                htmlFor={`educationalBackground.${index}.degree`}
                              >
                                Degree
                              </label>
                              <div className="mt-2">
                                <input
                                  // type="text"
                                  // id={`degree-${index}`}
                                  // name="degree"
                                  // value={edu.degree}
                                  // onChange={(e) =>
                                  //   handleEducationChange(index, e)
                                  // }
                                  // required
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                  {...register(
                                    `educationalBackground.${index}.degree`,
                                    {
                                      required: "This field is required",
                                    }
                                  )}
                                />
                              </div>
                              {_.get(
                                errors,
                                `educationalBackground.${index}.degree`
                              ) && (
                                <p className="mt-3 text-sm/6 text-red-500">
                                  {_.get(
                                    errors,
                                    `educationalBackground.${index}.degree.message`
                                  )}
                                </p>
                              )}
                            </div>
                            <div>
                              <label
                                className="block text-sm/6 font-medium text-gray-900"
                                htmlFor={`educationalBackground.${index}.institution`}
                              >
                                Institution
                              </label>
                              <div className="mt-2">
                                <input
                                  // type="text"
                                  // id={`institution-${index}`}
                                  // name="institution"
                                  // value={edu.institution}
                                  // onChange={(e) =>
                                  //   handleEducationChange(index, e)
                                  // }
                                  // required
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                  {...register(
                                    `educationalBackground.${index}.institution`,
                                    {
                                      required: "This field is required",
                                    }
                                  )}
                                />
                              </div>
                              {_.get(
                                errors,
                                `educationalBackground.${index}.institution`
                              ) && (
                                <p className="mt-3 text-sm/6 text-red-500">
                                  {_.get(
                                    errors,
                                    `educationalBackground.${index}.institution.message`
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              className="block text-sm/6 font-medium text-gray-900"
                              htmlFor={`educationalBackground.${index}.date`}
                            >
                              Graduation Date
                            </label>
                            <div className="mt-2">
                              <input
                                // type="text"
                                // id={`date-${index}`}
                                // name="date"
                                // value={edu.date}
                                // onChange={(e) =>
                                //   handleEducationChange(index, e)
                                // }
                                // required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...register(
                                  `educationalBackground.${index}.date`,
                                  {
                                    required: "This field is required",
                                  }
                                )}
                              />
                            </div>
                            {_.get(
                              errors,
                              `educationalBackground.${index}.date`
                            ) && (
                              <p className="mt-3 text-sm/6 text-red-500">
                                {_.get(
                                  errors,
                                  `educationalBackground.${index}.date.message`
                                )}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              className="block text-sm/6 font-medium text-gray-900"
                              htmlFor={`educationalBackground.${index}.description`}
                            >
                              Description
                            </label>
                            <div className="mt-2">
                              <textarea
                                // id={`description-${index}`}
                                // name="description"
                                // value={edu.description}
                                // onChange={(e) =>
                                //   handleEducationChange(index, e)
                                // }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                rows="3"
                                {...register(
                                  `educationalBackground.${index}.description`
                                )}
                              ></textarea>
                            </div>
                            <p className="mt-3 text-sm/6 text-gray-600">
                              Describe your education
                            </p>
                            {_.get(
                              errors,
                              `educationalBackground.${index}.description`
                            ) && (
                              <p className="mt-3 text-sm/6 text-red-500">
                                {_.get(
                                  errors,
                                  `educationalBackground.${index}.description.message`
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    // onClick={addEducation}
                    onClick={() =>
                      educAppend({
                        degree: "",
                        institution: "",
                        date: "",
                        description: "",
                      })
                    }
                    className="w-full py-2 px-4 text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    Add Educational Background
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Work Experience
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <div className="space-y-4">
                  {workFields.map((work, index) => (
                    <div key={work.id} className="border rounded-md">
                      <div
                        className="flex justify-between space-x-4 p-4"
                        onClick={() => toggleWorkSection(index)}
                      >
                        <h3 className="text-lg font-semibold">
                          {getValues(`workExperiences.${index}.title`)}
                        </h3>
                        <div className="flex">
                          <button
                            // onClick={() => deleteWorkExp(work.id)}
                            onClick={() => workRemove(index)}
                            className="text-red-500 hover:text-red-700 focus:outline-none mr-3"
                            type="button"
                          >
                            <TrashIcon className="w-5 h-5 mr-2" />
                          </button>

                          {activeWorkIndex === index ? (
                            <ChevronUpIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          ) : (
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          )}
                        </div>
                      </div>

                      <div
                        className={`transition-all ${
                          activeWorkIndex === index ? "block" : "hidden"
                        } p-4 text-gray-700 bg-gray-50`}
                      >
                        <div key={index} className="space-y-4 mb-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                className="block text-sm/6 font-medium text-gray-900"
                                htmlFor={`workExperiences.${index}.title`}
                              >
                                Job Title
                              </label>
                              <div className="mt-2">
                                <input
                                  // type="text"
                                  // id={`title-${index}`}
                                  // name="title"
                                  // value={work.title}
                                  // onChange={(e) =>
                                  //   handleWorkExperienceChange(index, e)
                                  // }
                                  // required
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                  {...register(
                                    `workExperiences.${index}.title`,
                                    {
                                      required: "This field is required",
                                    }
                                  )}
                                />
                              </div>
                              {_.get(
                                errors,
                                `workExperiences.${index}.title`
                              ) && (
                                <p className="mt-3 text-sm/6 text-red-500">
                                  {_.get(
                                    errors,
                                    `workExperiences.${index}.title.message`
                                  )}
                                </p>
                              )}
                            </div>
                            <div>
                              <label
                                className="block text-sm/6 font-medium text-gray-900"
                                htmlFor={`workExperiences.${index}.company`}
                              >
                                Company
                              </label>
                              <div className="mt-2">
                                <input
                                  // type="text"
                                  // id={`company-${index}`}
                                  // name="company"
                                  // value={work.company}
                                  // onChange={(e) =>
                                  //   handleWorkExperienceChange(index, e)
                                  // }
                                  // required
                                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                  {...register(
                                    `workExperiences.${index}.company`,
                                    {
                                      required: "This field is required",
                                    }
                                  )}
                                />
                              </div>
                              {_.get(
                                errors,
                                `workExperiences.${index}.company`
                              ) && (
                                <p className="mt-3 text-sm/6 text-red-500">
                                  {_.get(
                                    errors,
                                    `workExperiences.${index}.company.message`
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              className="block text-sm/6 font-medium text-gray-900"
                              htmlFor={`workExperiences.${index}.date`}
                            >
                              Employment Date
                            </label>
                            <div className="mt-2">
                              <input
                                // type="text"
                                // id={`work-date-${index}`}
                                // name="date"
                                // value={work.date}
                                // onChange={(e) =>
                                //   handleWorkExperienceChange(index, e)
                                // }
                                // required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                {...register(`workExperiences.${index}.date`, {
                                  required: "This field is required",
                                })}
                              />
                            </div>
                            {_.get(errors, `workExperiences.${index}.date`) && (
                              <p className="mt-3 text-sm/6 text-red-500">
                                {_.get(
                                  errors,
                                  `workExperiences.${index}.date.message`
                                )}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              className="block text-sm/6 font-medium text-gray-900"
                              htmlFor={`workExperiences.${index}.description`}
                            >
                              Job Description
                            </label>
                            <div className="mt-2">
                              <textarea
                                // id={`work-description-${index}`}
                                // name="description"
                                // value={work.description}
                                // onChange={(e) =>
                                //   handleWorkExperienceChange(index, e)
                                // }
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                rows="3"
                                {...register(
                                  `workExperiences.${index}.description`
                                )}
                              ></textarea>
                            </div>
                            <p className="mt-3 text-sm/6 text-gray-600">
                              Describe your role
                            </p>
                            {_.get(
                              errors,
                              `workExperiences.${index}.description`
                            ) && (
                              <p className="mt-3 text-sm/6 text-red-500">
                                {_.get(
                                  errors,
                                  `workExperiences.${index}.description.message`
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    // onClick={addWorkExperience}
                    onClick={() =>
                      workAppend({
                        title: "",
                        company: "",
                        date: "",
                        description: "",
                      })
                    }
                    className="w-full py-2 px-4 text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    Add Work Experience
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
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

ApplicantRegisterForm.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.any,
  register: PropTypes.any,
  watch: PropTypes.any,
  setValue: PropTypes.any,
  control: PropTypes.any,
  getValues: PropTypes.any,
};

export default ApplicantRegisterForm;
