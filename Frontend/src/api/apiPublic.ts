import axios from "axios";
const base_url = process.env.REACT_APP_API_BASE_URL;

const getPublicData = async (url: string) => {
  try {
    const res = await axios.get(`${base_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res.data; 
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      `Error ${error.response?.status}: ${error.response?.statusText}` ||
      error.message;
    throw new Error(message);
  }
};

export { getPublicData };
