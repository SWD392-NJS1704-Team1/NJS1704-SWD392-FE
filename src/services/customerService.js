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
    let value = '';
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
const CustomerService = {
  AddCustomer,
  GetCustomerList,
};

export default CustomerService;
