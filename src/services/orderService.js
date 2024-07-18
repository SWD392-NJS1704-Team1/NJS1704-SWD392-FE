import {
  DELETE_ORDER,
    ORDER_LIST,
    ADD_ORDER
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
  
  const AddOrder = async ({
    quantity,
    product_id,
    unit_price,
    date,
    discount,
    created_by,
    type,
    customer_id,
    user_id
  }) => {
    try {
      const res = await axiosInstance.post(ADD_ORDER, {
        orderRequests: [
          {
            quantity,
            product_id,
            unit_price
          }
        ],
        orderDTO: {
          date,
          discount,
          created_by,
          type,
          customer_id,
          user_id
        }
      });
      return res;
    } catch (error) {
      const errorResponse = error;
      throw new Error(errorResponse.response?.data.message);
    }
  };
  
  const OrderManagementListAPI = {
    GetOrderList,
    DeleteOrder,
    AddOrder
  };
  
  export default OrderManagementListAPI;