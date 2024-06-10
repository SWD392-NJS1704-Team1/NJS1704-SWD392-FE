import { ADDCUSTOMER, CUSTOMERLIST } from "@/constant/environments";
import axiosInstance from "@/utils/axiosInstance";

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

const GetCustomerList = async ({ keyword}) => {


  try {
    const endpoint = CUSTOMERLIST;
    let value = '';
    if (keyword && keyword.length > 0) {
      value = `?keyword=${keyword}`;
    }

    const res = await axiosInstance.get(
      `${endpoint}${value}`
    );

    return res;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};
const CustomerService = {
  AddCustomer,
  GetCustomerList,
};

export default CustomerService;
