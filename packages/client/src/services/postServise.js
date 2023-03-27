import axiosInstance from './services';

export const getAllPost = async (page = 1, offset = 6) => {
  const response = await axiosInstance.get(`post/all/?page=${page}&offset=${offset}`);
  return response.data;
};

export const getAllSpecificPost = async () => {
  const response = await axiosInstance.get('post/specific');
  return response.data;
};

export const cretePost = async (data) => {
  const response = await axiosInstance.post('/post', data);
  return response.data;
};

export const findPost = async (id) => {
  const response = await axiosInstance.get(`/post/${id}`);
  return response.data;
};

export const updatePost = async (id, data) => {
  const response = await axiosInstance.put(`/post/${id}`, data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axiosInstance.delete(`/post/${id}`);
  return response.data;
};
