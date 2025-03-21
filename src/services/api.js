import axios from "axios"; // Import axios to make HTTP requests

// Base URL of your backend API
const API_BASE_URL = "http://localhost:5001/api/auth";// Change this if your backend runs on a different port

/**
 * Register a new user (Parent, Student, Teacher)
 * @param {Object} userData - User data (firstName, lastName, email, password, phoneNumber, role)
 * @returns {Object} Response data from the backend
 */
export const registerUser = async (userData) => {
    try {
        const formattedData = { ...userData };

        const response = await axios.post(`${API_BASE_URL}/register`, formattedData);

        return response.data;
      
      } catch (error) {
        console.error("Signup error:", error.response ? error.response.data : error.message);

        return {
      success: false,
      error: error.response?.data?.error || "Registration failed.",
      details: error.response?.data || error.message,
       };
      }
    };

/**
 * Login a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Object} Response data containing user info and token
 */
export const loginUser = async (email, password) => {
  try {
    // Sending a POST request to the /login endpoint
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data; // Return user data (usually includes token)
  } catch (error) {
    // Handle errors
    console.error("Login error:", error.response?.data);
    throw error.response?.data || { error: "Login failed." };
  }
};

/**
 * Fetch user details after login (optional feature)
 * @param {string} token - Authentication token
 * @returns {Object} User profile data
 */
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }, // Sending token in headers
    });
    return response.data;
  } catch (error) {
    console.error("Profile fetch error:", error.response?.data);
    throw error.response?.data || { error: "Failed to fetch user profile." };
  }
};

