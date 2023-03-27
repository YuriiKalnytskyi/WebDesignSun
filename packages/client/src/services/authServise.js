import axiosInstance from './services';

export const singIn = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/sing-in', data);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    await axiosInstance.post(
      '/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (e) {
    return e.response.data;
  }
};
