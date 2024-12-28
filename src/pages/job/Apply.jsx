import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import _ from "lodash";

import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";

import ApplyForm from "../../components/job/ApplyForm";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

const Apply = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification, user } = useAppContext();

  const { id } = useParams();

  const { data: job } = useQuery("getJob", () => apiClient.getJob(id || ""), {
    enabled: !!id,
  });

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
      employeeId: _.get(user, "_id"),
      jobId: id,
    },
  });

  console.log("ddd", getValues())

  const mutation = useMutation(apiClient.applyJob, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(-1);
      showNotification({
        message: "Job Application submitted successfully.",
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

  console.log("job", job)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <Title text="Job Application" />
        <ApplyForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
          setValue={setValue}
          job={job}
          user={user}
        />
      </div>
    </>
  );
};

export default Apply;
