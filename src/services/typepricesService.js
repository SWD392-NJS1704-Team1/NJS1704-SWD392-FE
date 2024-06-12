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

const handleCreateTypePrice = async ({
  id,
  date,
  buy_price_per_gram,
  sell_price_per_gram,
  type,
}) => {
  try {
    const data = await axiosInstance.post(`${TYPEPRICES}/${id}`, {
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

const typepricesService = {
  handleGetAllTypePrices,
  handleCreateTypePrice,
};
export default typepricesService;
