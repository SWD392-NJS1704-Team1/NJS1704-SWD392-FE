import {
  ADDCUSTOMER,
  CUSTOMERLIST,
  DELETECUSTOMER,
  UPDATECUSTOMER,
} from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const AddCustomer = ({
  fullName,
  email,
  phone,
  address,
  accumulated_point,
}) => {
  try {
    axiosInstance.post(ADDCUSTOMER, {
      fullName,
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

const GetCustomerList = async ({ keyword }) => {
  try {
    const endpoint = CUSTOMERLIST;
    let value = '';
    if (keyword && keyword.length > 0) {
      value = `?keyword=${keyword}`;
    }

    const res = await axiosInstance.get(`${endpoint}${value}`);

    return res;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const DeleteCustomer = async (id) => {
  try {
    const data = await axiosInstance.delete(DELETECUSTOMER + '/' + id);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const UpdateCustomer = async ({
  id,
  fullName,
  email,
  phone,
  address,
  accumulated_point,
}) => {
  try {
    console.log({
      fullName,
      email,
      phone,
      address,
      accumulated_point,
    });
    const data = await axiosInstance.put(UPDATECUSTOMER + '/' + id, {
      fullName,
      email,
      phone,
      address,
      accumulated_point,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const CustomerService = {
  AddCustomer,
  GetCustomerList,
  DeleteCustomer,
  UpdateCustomer,
};

export default CustomerService;
