import {
  DELETE_ORDER,
    ORDER_LIST,
  } from '@/constant/environments';
  import axiosInstance from '@/utils/axiosInstance';
  
const GetOrderList = async () => {
    try {
      const data = await axiosInstance.get(ORDER_LIST);
      const formattedData = data.orders.map(order => ({
        ...order,
        fullName: order.customer.fullName,
      }));
  
      return formattedData;
    } catch (error) {
      const errorResponse = error;
      throw new Error(errorResponse.response?.data.message);
    }
  };

  const DeleteOrder = async (orderId) => {
    try {
      const data = await axiosInstance.delete(DELETE_ORDER + '/' + orderId);
      return data;
    } catch (error) {
      const errorResponse = error;
      throw new Error(errorResponse.response?.data.message);
    }
  };
  
  
  const OrderManagementListAPI = {
    GetOrderList,
    DeleteOrder
  };
  
  export default OrderManagementListAPI;