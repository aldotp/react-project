const URL = import.meta.env.VITE_API_URL;

const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    if (!data || !data.data) {
      throw new Error("Invalid response format");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

const getRole = async () => {
  try {
    const userProfile = await fetchUserProfile();
    return userProfile.role;
  } catch (error) {
    console.error("Error getting user role:", error);
    throw error;
  }
};

export { fetchUserProfile, getRole };
