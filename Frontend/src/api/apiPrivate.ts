import api from "./axiosInterceptor";

const base_url = process.env.REACT_APP_API_BASE_URL;

const getPrivateData = async (url: string) => {
  try {
    const res = await api.get(`${base_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    handleError(error);
  }
};

const postPrivateData = async (url: string, body: any) => {
  try {
    const res = await api.post(`${base_url}${url}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    handleError(error);
  }
};

const putPrivateData = async (url: string, body: any) => {
  try {
    const res = await api.put(`${base_url}${url}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    handleError(error);
  }
};

const patchPrivateData = async (url: string, body: any) => {
  try {
    const res = await api.patch(`${base_url}${url}`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    handleError(error);
  }
};

const deletePrivateData = async (url: string) => {
  try {
    const res = await api.delete(`${base_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (error: any) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  const message =
    error.response?.data?.message ||
    `Error ${error.response?.status}: ${error.response?.statusText}` ||
    error.message;
  throw new Error(message);
};

export {
  getPrivateData,
  postPrivateData,
  putPrivateData,
  patchPrivateData,
  deletePrivateData,
};
