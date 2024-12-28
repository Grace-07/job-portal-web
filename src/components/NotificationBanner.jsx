import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const NotificationBanner = ({ message, type, onClose }) => {
  // Determine the background color based on the type of message
  const bannerClass =
    type === "error"
      ? "bg-red-600"
      : type === "success"
      ? "bg-green-600"
      : "bg-blue-600";

  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Set up the fade-out effect and auto-dismiss after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Close the banner when the timer ends
    }, 4000); // 4 seconds before fading out

    return () => clearTimeout(timer); // Clean up timer if the component is unmounted
  }, [onClose]);

  return (
    isVisible && (
      <div
        className={`fixed top-0 left-0 right-0 p-4 text-white flex items-center justify-between shadow-lg z-50 ${bannerClass}`}
      >
        <div className="flex items-center space-x-3">
          {/* Icon based on type */}
          {type === "error" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
              />
            </svg>
          )}
          {type === "success" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}

          {/* Message Text */}
          <p className="text-sm">{message}</p>
        </div>

        {/* Close button */}
        <button onClick={onClose} className="text-white font-semibold">
          <span className="sr-only">Close</span> &times;
        </button>
      </div>
    )
  );
};

NotificationBanner.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
};

export default NotificationBanner;
