import PropTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import _ from "lodash";

import ComboBox from "../ComboBox";

import { COUNTRY, JOB_INDUSTRY } from "../../constant/lists";
import * as apiClient from "../../api-client";
import { useQuery } from "react-query";
import CompanyDetails from "./CompanyDetails";
import { useEffect, useState } from "react";

const CompanyForm = ({
  handleSubmit,
  handleCancel,
  errors,
  register,
  getValues,
  hasCompany,
  handleForm,
  setValue,
}) => {
  const { data: companies } = useQuery("fetchCompanies", () =>
    apiClient.fetchCompanies()
  );

  const companyId = getValues("companyId");

  console.log("companies", companies);
  console.log("companyId", companyId);

  const companyList = (companies || []).map((company) => ({
    label: company.name,
    value: company._id,
  }));

  console.log("companyList", companyList);

  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    if (!_.isEmpty(companies) && !_.isEmpty(companyId)) {
      const findCompany = companies.find((company) =>
        _.isEqual(company._id, companyId)
      );

      setSelectedCompany(findCompany);
    } else {
      setSelectedCompany(null);
    }
  }, [companyId, companies]);

  console.log("selectedCompany", selectedCompany);

  const [isOpen, setIsOpen] = useState(false); // Whether the dropdown is open
  const [query, setQuery] = useState(""); // User input search query

  const handleSelect = (option) => {
    setValue("companyId", option.value);
    setIsOpen(false); // Close the dropdown
    setQuery(option.label);
  };

  useEffect(() => {
    if (_.isEmpty(query)) {
      setValue("companyId", "");
    }
  }, [query, setValue]);

  return (
    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Company Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              praesent curae imperdiet class turpis commodo sem, maecenas
              placerat.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {hasCompany ? (
                <>
                  <div className="sm:col-span-4">
                    <ComboBox
                      options={companyList}
                      setValue={setValue}
                      label="Name"
                      id="companyId"
                      register={register}
                      handleSelect={handleSelect}
                      isOpen={isOpen}
                      handleOpen={setIsOpen}
                      handleQuery={setQuery}
                      query={query}
                    />
                    <p className="mt-3 text-sm/6 text-gray-600">
                      Can't find your company on the list?{" "}
                      <a
                        onClick={() => handleForm(false)}
                        className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      >
                        Add a new company.
                      </a>
                    </p>
                    {errors.companyId && (
                      <p className="mt-3 text-sm/6 text-red-500">
                        {errors.companyId.message}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                          type="text"
                          className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          {...register("name", {
                            required: "This field is required",
                          })}
                        />
                      </div>
                    </div>
                    {errors.name && (
                      <p className="mt-3 text-sm/6 text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        {...register("description", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-600">
                      Write a few sentences about your company.
                    </p>
                    {errors.description && (
                      <p className="mt-3 text-sm/6 text-red-500">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="website"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Website URL
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                          type="text"
                          placeholder="https://wwww.sample.com"
                          className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                          {...register("website", {
                            required: "This field is required",
                          })}
                        />
                      </div>
                    </div>
                    {errors.website && (
                      <p className="mt-3 text-sm/6 text-red-500">
                        {errors.website.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="industry"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Industry
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        autoComplete="industry"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        {...register("industry", {
                          required: "This field is required",
                        })}
                      >
                        {JOB_INDUSTRY.map((level, index) => (
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
                </>
              )}
            </div>
          </div>
          {hasCompany && !_.isEmpty(selectedCompany) && (
            <CompanyDetails data={selectedCompany} />
          )}
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

CompanyForm.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.any,
  register: PropTypes.any,
  watch: PropTypes.any,
  control: PropTypes.any,
  getValues: PropTypes.any,
  handleForm: PropTypes.func,
  hasCompany: PropTypes.bool,
  setValue: PropTypes.any,
};

export default CompanyForm;
