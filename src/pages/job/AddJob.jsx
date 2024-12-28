import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import _ from "lodash";

import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";

import JobForm from "../../components/job/JobForm";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

const AddJob = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification, user } = useAppContext();

  const userId = _.get(user, "_id");
  const companyId = _.get(user, "companyId");

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      employerId: userId,
      companyId: companyId,
    },
  });

  const mutation = useMutation(apiClient.addJob, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/jobs");
      showNotification({
        message: "Job added successfully.",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("error", error);
      showNotification({ message: error.message, type: "error" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const handleCancel = () => navigate(-1);

  console.log("data", getValues());

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <Title text="Create a New Job" />
        <JobForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
          setValue={setValue}
        />
      </div>
\    </>
  );
};

export default AddJob;
