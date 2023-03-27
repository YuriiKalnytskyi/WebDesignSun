import axiosInstance from './services';

export const loginServer = async (data) => {
  try {
    const response = await axiosInstance.post('/academy/login', data);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export const logoutServer = async () => {
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
