import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";

import CompanyForm from "../../components/company/CompanyForm";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import _ from "lodash";

const AddCompany = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification, user } = useAppContext();

  const [hasCompany, setHasCompany] = useState(true);

  const id = _.get(user, "_id");

  console.log("hasCompany", hasCompany);

  const {
    register,
    formState: { errors, isDirty, isLoading },
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
    unregister,
  } = useForm({});

  console.log("errors", errors);

  console.log("isDirty", isDirty);

  console.log("isLoading", isLoading);

  console.log("getValues", getValues());

  const { mutate: updateUserInfoMutation } = useMutation(
    apiClient.editProfile,
    {
      onSuccess: () => {
        navigate("/");
        showNotification({
          message: "Company added successfully.",
          type: "success",
        });
      },
      onError: (error) => {
        console.log("error", error);
        showNotification({ message: error.message, type: "error" });
      },
    }
  );

  const { mutate: createCompanyMutation } = useMutation(
    hasCompany ? apiClient.editProfile : apiClient.addCompany,
    {
      onSuccess: async (data) => {
        console.log("data ko", data);
        await queryClient.invalidateQueries("validateToken");

        if (hasCompany) {
          navigate("/");
          showNotification({
            message: "Company saved successfully.",
            type: "success",
          });
        } else {
          const payload = {
            id: id,
            companyId: _.get(data, "company._id"),
          };

          updateUserInfoMutation(payload);
        }
      },
      onError: (error) => {
        console.log("error", error);
        showNotification({ message: error.message, type: "error" });
      },
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);

    if (hasCompany) {
      const payload = {
        id: id,
        companyId: _.get(data, "companyId"),
      };
      createCompanyMutation(payload);
    } else {
      createCompanyMutation(data);
    }
  });

  const handleCancel = () => navigate(-1);

  useEffect(() => {
    if (hasCompany) {
      register("companyId", { required: "This field is required" });
    } else {
      unregister("companyId");
    }
  }, [hasCompany, register, unregister]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">
        <Title text={hasCompany ? "Select a Company" : "Add New Company"} />
        <CompanyForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
          handleForm={setHasCompany}
          hasCompany={hasCompany}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default AddCompany;
