import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import _ from "lodash";
import { format } from "date-fns";

import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";

import JobForm from "../../components/job/JobForm";
import Title from "../../components/Title";

const EditJob = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification } = useAppContext();

  const { id } = useParams();

  const { data: job } = useQuery(
    "getJob",
    () => apiClient.getJob(id || ""),
    {
      enabled: !!id,
    }
  );

  const formattedDate = format(
    new Date(_.get(job, "expirationDate", null)),
    "yyyy-MM-dd"
  );

  const initData = {
    position: _.get(job, "position", ""),
    description: _.get(job, "description", ""),
    type: _.get(job, "type", ""),
    level: _.get(job, "level", ""),
    function: _.get(job, "function", ""),
    setup: _.get(job, "setup", ""),
    vacancy: _.get(job, "vacancy", ""),
    expirationDate: formattedDate,
    salaryPay: _.get(job, "salaryPay", ""),
    payPeriod: _.get(job, "payPeriod", ""),
    isActive: _.get(job, "isActive", false),
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
  } = useForm({
    defaultValues: initData,
  });

  const mutation = useMutation(apiClient.editJob, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(-1);
      showNotification({
        message: "Job updated successfully.",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("error", error);
      showNotification({ message: error.message, type: "error" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    const payload = {
      id: id,
      ...data,
    };
    mutation.mutate(payload);
  });

  const handleCancel = () => navigate(-1);

  console.log("data", getValues());
  console.log("job", job);


  return (
    <div className="container mx-auto my-10">
      <Title text="Edit Job Details" />
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
  );
};

export default EditJob;
