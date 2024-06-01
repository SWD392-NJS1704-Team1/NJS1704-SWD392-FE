import { LOGIN, REGISTER, USERLIST } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const RegisterUser = async ({
  fullname,
  email,
  phone_number,
  address,
  date_of_birth,
  role_id,
  counter_id,
}) => {
  try {
    const res = await axiosInstance.post(REGISTER, {
      fullname,
      email,
      phone_number,
      address,
      date_of_birth,
      role_id,
      counter_id,
    });
    return res;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const LoginUser = async ({ email, password, role_id }) => {
  try {
    const data = await axiosInstance.post(LOGIN, {
      email,
      password,
      role_id,
    });
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetUsersList = async ({ keyword, page, limit }) => {
  try {
    const endpoint = USERLIST;
    const queryParams = `page=${page}&limit=${limit}`;
    let value = '';

    if (value && value.length > 0) {
      value = `keyword=${keyword}&`;
    }

    const res = await axiosInstance.get(`${endpoint}?${value}${queryParams}`);
    return res.users;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetCurrentUser = () => {
  return axiosInstance.get(`/users/profile`, {
    headers: { Authorization: `Bearer ${tokenMethod.get()?.accessToken}` },
  });
};

const UserManagementListAPI = {
  RegisterUser,
  GetUsersList,
  LoginUser,
  GetCurrentUser,
};

export default UserManagementListAPI;
