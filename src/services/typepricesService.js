const { TYPEPRICES } = require('@/constant/environments');

const handleGetAllTypePrices = async () => {
  try {
    const data = await axiosInstance.get(TYPEPRICES);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const handleGetTypePriceById = async (id) => {
  try {
    const data = await axiosInstance.get(`${TYPEPRICES}/${id}`);
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
    const data = await axiosInstance.post(TYPEPRICES, {
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
    const data = await axiosInstance.put(`${TYPEPRICES}/${id}`, {
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
    const data = await axiosInstance.delete(`${TYPEPRICES}/${id}`);
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