import PropTypes from "prop-types";
import { useEffect } from "react";

const AddCompanyModal = ({ isOpen, closeModal }) => {

  useEffect(() => {
    if (isOpen) {
      // Redirect after 3 seconds
      const timer = setTimeout(() => {
        closeModal();
      }, 3000);

      // Clear timer when the modal closes
      return () => clearTimeout(timer);
    }
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Next Step!
          </h2>
          <p className="text-lg text-center mb-6">
            Registration successful. The next step is to select which company
            you're from or add your own company. You will be redirected
            shortly...
          </p>
          <div className="text-center">
            <button
              onClick={() => closeModal()} // Optionally close manually
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddCompanyModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default AddCompanyModal;
