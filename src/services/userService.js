import { ADDUSER, DELETEUSER, GETUSERINFO, LOGIN, UPDATEUSER, USERLIST } from "@/constant/environments";
import axiosInstance from "@/utils/axiosInstance";

const RegisterUser = async ({
  fullname,
  email,
  phone_number,
  date_of_birth,
  role_id,
  counter_id,
}) => {
  try {
    const data = await axiosInstance.post(ADDUSER, {
      fullname,
      email,
      phone_number,
      date_of_birth,
      role_id,
      counter_id,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateUser = async ({
  id,
  fullname,
  email,
  phone_number,
  date_of_birth,
  role_id,
  counter_id,
}) => {
  try {
    console.log({
      fullname,
      email,
      phone_number,
      date_of_birth,
      role_id,
      counter_id,
    });
    const data = await axiosInstance.put(UPDATEUSER + '/' + id, {
      fullname,
      email,
      phone_number,
      date_of_birth,
      role_id,
      counter_id,
    });
    return data;
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

const DeleteUser = async (userId) => {
  try {
    const data = await axiosInstance.delete(DELETEUSER + '/' + userId);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetUserInfo = async (userId) => {
  try {
    const data = await axiosInstance.get(GETUSERINFO + '/' + userId);
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
  DeleteUser,
  GetUserInfo,
  UpdateUser,
};

export default UserManagementListAPI;
