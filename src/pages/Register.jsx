import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";

import ApplicantRegisterForm from "../components/register/ApplicantRegisterForm";
import { APPLICANT, EMPLOYER } from "../constant/variable";
import EmployerRegisterForm from "../components/register/EmployerRegisterForm";
import AddCompanyModal from "../components/company/AddCompanyModal";

const Register = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showNotification, isLoggedIn } = useAppContext();
  const { role } = useParams(); // Access route parameters from the URL

  console.log("role", role);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      type: role,
    },
  });

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");

      if (role === EMPLOYER) {
        setIsModalOpen(true);
      } else {
        navigate("/");
      }
    },
    onError: (error) => {
      console.log("error", error);
      showNotification({ message: error.message, type: "error" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
    mutation.mutate(data);
  });

  const handleCancel = () => {
    navigate("/login");
  };

  const closeModal = () => {
    console.log("isLoggedIn register", isLoggedIn)
    setIsModalOpen(false); // Close the modal manually if needed
    navigate("/companies/add");
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-5">Create new account</h1>

      {role === APPLICANT && (
        <ApplicantRegisterForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
        />
      )}
      {role === EMPLOYER && (
        <EmployerRegisterForm
          handleCancel={handleCancel}
          handleSubmit={onSubmit}
          errors={errors}
          register={register}
          watch={watch}
          control={control}
          getValues={getValues}
        />
      )}
      {role === EMPLOYER && (
        <AddCompanyModal isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Register;
