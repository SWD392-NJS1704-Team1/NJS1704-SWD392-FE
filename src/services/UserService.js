import { LOGIN, REGISTER } from "@/constant/environments";
import axiosInstance from "@/utils/axiosInstance";

const RegisterUser = ({
  fullname,
  email,
  phone_number,
  address,
  date_of_birth,
  role_id,
  counter_id,
}) => {
  try {
    axiosInstance.post(REGISTER, {
      fullname,
      email,
      phone_number,
      address,
      date_of_birth,
      role_id,
      counter_id,
    });
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const LoginUser = ({ email, password, role_id }) => {
  try {
    axiosInstance.post(LOGIN, {
      email,
      password,
      role_id,
    });
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UserManagementListAPI = {
  RegisterUser,
  LoginUser,
};

export default UserManagementListAPI;
