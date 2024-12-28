import PropTypes from "prop-types";

const TypeModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Are you a ...
          </h2>
          <div className="flex justify-around my-10">
            {/* Applicant Button */}
            <button
              onClick={() => onSelect("applicant")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Applicant
            </button>
            <span className="my-auto font-semibold">OR</span>
            {/* Employer Button */}
            <button
              onClick={() => onSelect("employer")}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
            >
              Employer
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TypeModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
};

export default TypeModal;
