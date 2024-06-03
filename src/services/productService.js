import { ADD_PRODUCT, PRODUCTS_LIST } from '@/constant/environments';
import axiosInstance from '@/utils/axiosInstance';

const handleAddProduct = async ({
  product_name,
  barcode,
  quantity,
  price_processing,
  price_stone,
  weight,
  description,
  image_url,
  type_id,
  counter_id,
}) => {
  try {
    const res = await axiosInstance.post(ADD_PRODUCT, {
      product_name,
      barcode,
      quantity,
      price_processing,
      price_stone,
      weight,
      description,
      image_url,
      type_id,
      counter_id,
    });
    return res;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const getAllProducts = async (keyword, page, limit) => {
  try {
    const endpoint = PRODUCTS_LIST;
    const queryParams = `page=${page}&limit=${limit}`;
    let value = '';

    if (value && value.length > 0) {
      value = `keyword=${keyword}&`;
    }

    const res = await axiosInstance.get(`${endpoint}?${value}${queryParams}`);
    const productsData = res.products || [];
    const productsPage = res.totalPages || 0;
    return { productsData, productsPage };
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};
const ProductService = {
  getAllProducts,
  handleAddProduct,
};
export default ProductService;
