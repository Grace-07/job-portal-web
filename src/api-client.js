import _ from "lodash";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCurrentUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

// Register a new user
export const register = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody; // Return the response if successful
};

export const signIn = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

// Validate a token
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Token invalid");
  }

  return response.json();
};

export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};

export const getUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching user");
  }

  return response.json();
};

export const editProfile = async (formData) => {
  const id = _.get(formData, "id");
  const updatedPayload = _.omit(formData, "id");
  const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedPayload),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody; // Return the response if successful
};

export const addJob = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/jobs`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to add job");
  }

  return response.json();
};

export const editJob = async (formData) => {
  const id = _.get(formData, "id");
  const updatedPayload = _.omit(formData, "id");
  const response = await fetch(`${API_BASE_URL}/api/jobs/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedPayload),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody; // Return the response if successful
};

export const fetchJobs = async () => {
  const response = await fetch(`${API_BASE_URL}/api/jobs`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching jobs");
  }

  return response.json();
};

export const getJob = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/jobs/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching job");
  }

  return response.json();
};

export const applyJob = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/applications`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to apply job");
  }

  return response.json();
};

export const fetchApplications = async () => {
  const response = await fetch(`${API_BASE_URL}/api/applications`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching applications");
  }

  return response.json();
};

export const fetchApplicationByUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/users/${id}/applications`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching company");
  }

  return response.json();
};

export const addCompany = async (data) => {
  console.log("data form", data);
  const response = await fetch(`${API_BASE_URL}/api/companies`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to add company");
  }

  return response.json();
};

export const editCompany = async (formData, id) => {
  const response = await fetch(`${API_BASE_URL}/api/companies/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody; // Return the response if successful
};

export const fetchCompanies = async () => {
  const response = await fetch(`${API_BASE_URL}/api/companies`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching companies");
  }

  return response.json();
};

export const getCompany = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/companies/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching company");
  }

  return response.json();
};
