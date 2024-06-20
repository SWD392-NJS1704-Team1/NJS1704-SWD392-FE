import {
  ADD_TYPE_PRICE,
  DELETE_TYPE_PRICE,
  GET_ALL_TYPE_PRICE,
  GET_TYPE_PRICE_BY_ID,
  UPDATE_TYPE_PRICE,
} from '@/constant/environments';

const handleGetAllTypePrices = async () => {
  try {
    const data = await axiosInstance.get(GET_ALL_TYPE_PRICE);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const handleGetTypePriceById = async (id) => {
  try {
    const data = await axiosInstance.get(`${GET_TYPE_PRICE_BY_ID}/${id}`);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const handleCreateTypePrice = async ({
  date,
  buy_price_per_gram,
  sell_price_per_gram,
  type,
}) => {
  try {
    const data = await axiosInstance.post(ADD_TYPE_PRICE, {
      date,
      buy_price_per_gram,
      sell_price_per_gram,
      type,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const handleUpdateTypePrice = async ({
  id,
  date,
  buy_price_per_gram,
  sell_price_per_gram,
  type,
}) => {
  try {
    const data = await axiosInstance.put(`${UPDATE_TYPE_PRICE}/${id}`, {
      date,
      buy_price_per_gram,
      sell_price_per_gram,
      type,
    });
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const handleDeleteTypePrice = async (id) => {
  try {
    const data = await axiosInstance.delete(`${DELETE_TYPE_PRICE}/${id}`);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const TypePricesService = {
  handleGetAllTypePrices,
  handleGetTypePriceById,
  handleCreateTypePrice,
  handleUpdateTypePrice,
  handleDeleteTypePrice,
};
export default TypePricesService;
