import { useQuery } from "react-query";
// import { useNavigate } from "react-router-dom";
import _ from "lodash";

import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";

import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { useEffect, useState } from "react";
import Title from "../../components/Title";

const Companies = () => {
  const { showNotification } = useAppContext();
  // const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredCompanyList, setFilteredCompanyList] = useState([]);

  const { data: companies } = useQuery("fetchJobs", apiClient.fetchCompanies, {
    onError: (error) => {
      showNotification({ message: error.message, type: "error" });
    },
  });

  const companyList = (filteredCompanyList || []).map((company) => ({
    id: _.get(company, "_id"),
    title: _.get(company, "name"),
    description: _.get(company, "industry"),
    imageUrl: "https://via.placeholder.com/300",
    time: _.get(company, "address.city"),
  }));

  // const handleView = (id) => {
  //   navigate(`/companies/${id}`);
  // };

  console.log("com", companies);

  useEffect(() => {
    if (!_.isEmpty(companies)) {
      if (!_.isEmpty(search)) {
        const searchCompanies = companies.filter((job) =>
          _.lowerCase(_.get(job, "title")).includes(_.lowerCase(search))
        );
        setFilteredCompanyList(searchCompanies);
      } else {
        setFilteredCompanyList(companies);
      }
    }
  }, [companies, search]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
      <div className="text-center mt-5">
          <Title text="Explore Companies" />
        </div>
        <Search onSearch={setSearch} />
        <div>
          <div className="max-w-screen-xl mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyList.map((card) => (
                <div
                  key={card.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  // onClick={() => handleView(card.id)}
                >
                  {/* <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                /> */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{card.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">{card.time}</span>
                      {/* <span className="text-sm text-gray-500">{card.time}</span> */}
                      {/* <button
                        className={`${card.buttonColor} text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-80 focus:outline-none`}
                      >
                        {card.buttonText}
                      </button> */}
                      {/* <button
                        className={`${card.buttonColor} text-white py-2 px-4 rounded-md text-sm hover:bg-opacity-80 focus:outline-none`}
                      >
                        View
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
