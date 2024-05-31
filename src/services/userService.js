import { LOGIN, REGISTER, USERLIST } from "@/constant/environments";
import axiosInstance from "@/utils/axiosInstance";

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
    const data = await axiosInstance.post(REGISTER, {
      fullname,
      email,
      phone_number,
      address,
      date_of_birth,
      role_id,
      counter_id,
    });
    console.log(data);
    return data
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

// const GetUsersList = async ({ keyword, page, limit }) => {
//   try {
//     const endpoint = USERLIST;
//     const queryParams = `page=${page}&limit=${limit}`;
//     let value = "";

//     if (value && value.length > 0) {
//       value = `keyword=${keyword}&`;
//     }

//     const { data } = await axiosInstance.get(
//       `${endpoint}?${value}${queryParams}`
//     );

//     return data.data;
//   } catch (error) {
//     const errorResponse = error;
//     throw new Error(errorResponse.response?.data.message);
//   }
// };

const GetUsersList = async ({ keyword, page, limit }) => {
  try {
    const endpoint = USERLIST;
    const queryParams = `page=${page}&limit=${limit}`;
    let value = "";

    if (keyword && keyword.length > 0) {
      value = `keyword=${keyword}&`;
    }

    const { data } = await axiosInstance.get(
      `${endpoint}?${value}${queryParams}`
    );

    return data.data;
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    // Return a default error message if the error response doesn't contain a message
    const errorMessage = error.response?.data.message;
    throw new Error(errorMessage);
  }
};


const AddCustomer = ({
  fullname,
  email,
  phone,
  address,
  accumulated_point,
  
}) => {
  try {
    axiosInstance.post(ADDCUSTOMER, {
      fullname,
      email,
      phone,
      address,
      accumulated_point,
    });
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const GetCustomerList = async ({ keyword, page, limit }) => {
  if (!page || !limit) return undefined;

  try {
    const endpoint = USERLIST;
    const queryParams = `page=${page}&limit=${limit}`;
    let value = "";

    if (value && value.length > 0) {
      value = `keyword=${keyword}&`;
    }

    const { data } = await axiosInstance.get(
      `${endpoint}?${value}${queryParams}`
    );

    return data.data;

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
  AddCustomer,
  GetCustomerList
};

export default UserManagementListAPI;