import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_BY_ID,
  PRODUCTS_LIST,
  UPDATE_PRODUCT,
} from '@/constant/environments';
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

const getAllProducts = async ({ keyword, page, limit }) => {
  try {
    const endpoint = PRODUCTS_LIST;
    const queryParams = `page=${page}&limit=${limit}`;
    let value = '';

    if (keyword && keyword.length > 0) {
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

const deleteProduct = async (productId) => {
  try {
    const endpoint = DELETE_PRODUCT;
    const res = await axiosInstance.delete(`${endpoint}/${productId}`);
    return res;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const updateProduct = async ({
  id,
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
    const res = await axiosInstance.put(`${UPDATE_PRODUCT}/${id}`, {
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

const handleGetProductById = async (id) => {
  try {
    const data = await axiosInstance.get(GET_PRODUCT_BY_ID + '/' + id);
    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const ProductService = {
  getAllProducts,
  handleAddProduct,
  deleteProduct,
  updateProduct,
  handleGetProductById,
};
export default ProductService;
