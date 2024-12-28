import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query"; // Fixed import statement
import * as apiClient from "../api-client"; // Added missing import for apiClient
import PropTypes from "prop-types";
import NotificationBanner from "../components/NotificationBanner";

// Create the AppContext with an initial value of undefined
const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  // Check if the user is logged in using a token validation query
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  const { data } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser, {
    retry: false,
  });

  console.log("fetchCurrentUser", data)

  const [notification, setNotification] = useState(undefined);

  const showNotification = (message) => {
    setNotification(message);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !isError,
        user: data || null,
        showNotification,
      }}
    >
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(undefined)}
        />
      )}

      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.any,
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);

  // Ensure the context is being used within a provider
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};
