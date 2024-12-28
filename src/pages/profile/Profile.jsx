import { useNavigate } from "react-router-dom";
import ProfileDetails from "../../components/profile/ProfileDetails";
import { PencilIcon } from "@heroicons/react/20/solid";
import Navbar from "../../components/Navbar";
import _ from "lodash";
import { useQuery } from "react-query";
import * as apiClient from "../../api-client";

const Profile = () => {
  const navigate = useNavigate();

  const { data: user } = useQuery("fetchCurrentUser", () =>
    apiClient.fetchCurrentUser()
  );

  const id = _.get(user, "_id", null);

  const handleRedirect = () => navigate(`/profile/${id}/edit`);

  console.log("user", user);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Profile
              </h2>
            </div>
            <div className="mt-5 flex ml-4 mt-0">
              <span className="block">
                <button
                  onClick={handleRedirect}
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon
                    aria-hidden="true"
                    className="-ml-0.5 mr-1.5 size-5 text-gray-400"
                  />
                  Edit
                </button>
              </span>
            </div>
          </div>
        </div>
        <ProfileDetails data={user} />
      </div>
    </>
  );
};

export default Profile;
