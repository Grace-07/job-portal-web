import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import _ from "lodash";
import { format } from "date-fns";

import ProfileForm from "../../components/profile/ProfileForm";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

const EditProfile = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification, user } = useAppContext();

  const formattedDate = format(
    new Date(_.get(user, "birthday", null)),
    "yyyy-MM-dd"
  );

  const initData = {
    about: _.get(user, "about", ""),
    username: _.get(user, "username", ""),
    address: _.get(user, "address", null),
    birthday: formattedDate,
    contactNumber: _.get(user, "contactNumber", ""),
    educationalBackground: _.get(user, "educationalBackground", []),
    emailAddress: _.get(user, "emailAddress", ""),
    firstName: _.get(user, "firstName", ""),
    lastName: _.get(user, "lastName", ""),
    workExperiences: _.get(user, "workExperiences", []),
    type: _.get(user, "type"),
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    getValues,
  } = useForm({
    defaultValues: initData,
  });

  const mutation = useMutation(apiClient.editProfile, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(-1);
      showNotification({
        message: "Profile updated successfully.",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("error", error);
      showNotification({ message: error.message, type: "error" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    const id = _.get(user, "_id");
    const payload = {
      id: id,
      ...data,
    };
    mutation.mutate(payload);
  });

  const handleCancel = () => navigate(-1);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <Title text="Edit Profile Details" />
        <ProfileForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
        />
      </div>
    </>
  );
};

export default EditProfile;
