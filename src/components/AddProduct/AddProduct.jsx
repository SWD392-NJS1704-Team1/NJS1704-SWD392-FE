import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { closePopup } from '@/store/reducers/popupReducer';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { Button } from 'antd';
import { MESS, REGEX } from '@/constant/validate';
import useAddProduct from '@/utils/useAddProduct';
import ComponentLoading from '../ComponentLoading/ComponentLoading';
import useGetCounterList from '@/utils/useGetCounterList';
import { useState } from 'react';
import useGetTypePricesList from '@/pages/TypePricespage/useGetTypePricesList';

const AddProduct = () => {
  const dispatch = useDispatch();
  const addProduct = useAddProduct();
  const { data: counterList, isLoading } = useGetCounterList();
  const { data: typePriceList } = useGetTypePricesList();
  const [selectedCounter, setSelectedCounter] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    addProduct.mutate({
      product_name: data.product_name,
      barcode: data.barcode,
      quantity: data.quantity,
      price_processing: data.price_processing,
      price_stone: data.price_stone,
      weight: data.weight,
      description: data.description,
      image_url: data.image_url,
      type_id: data.type_id,
      counter_id: data.counter_id,
    });
  };

  const handleCancel = () => {
    dispatch(closePopup('Create a new Product'));
  };

  if (isLoading) {
    return <ComponentLoading />;
  }

  return (
    <div className="py-2 px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <label htmlFor="product_name" className="font-bold mb-1">
              Product Name
            </label>
            <div className="w-full flex flex-col">
              <input
                type="text"
                name="product_name"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Product Name"
                {...register('product_name', {
                  required: MESS.ERROR_PRODUCT_NAME,
                })}
              />
              {errors.product_name && (
                <span className="text-red-500 text-sm">
                  {errors.product_name.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="barcode" className="font-bold mb-1">
              Barcode
            </label>
            <div className="w-full flex flex-col">
              <input
                type="text"
                name="barcode"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Barcode"
                {...register('barcode', {
                  required: MESS.ERROR_PRODUCT_BARCODE,
                })}
              />
              {errors.barcode && (
                <span className="text-red-500 text-sm">
                  {errors.barcode.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="quantity" className="font-bold mb-1">
              Quantity
            </label>
            <div className="w-full flex flex-col">
              <input
                type="number"
                name="quantity"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Quantity"
                {...register('quantity', {
                  required: MESS.ERROR_PRODUCT_QUANTITY_INVALID,
                })}
              />
              {errors.quantity && (
                <span className="text-red-500 text-sm">
                  {errors.quantity.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="price_processing" className="font-bold mb-1">
              Price Processing
            </label>
            <div className="w-full flex flex-col">
              <input
                type="number"
                name="price_processing"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Price Processing"
                {...register('price_processing', {
                  required: MESS.ERROR_PRODUCT_PRICE_PROCESSING,
                })}
              />
              {errors.price_processing && (
                <span className="text-red-500 text-sm">
                  {errors.price_processing.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="price_stone" className="font-bold mb-1">
              Price Stone
            </label>
            <div className="w-full flex flex-col">
              <input
                type="number"
                name="price_stone"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Price Stone"
                {...register('price_stone', {
                  required: MESS.ERROR_PRODUCT_PRICE_STONE,
                })}
              />
              {errors.price_stone && (
                <span className="text-red-500 text-sm">
                  {errors.price_stone.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="weight" className="font-bold mb-1">
              Weight
            </label>
            <div className="w-full flex flex-col">
              <input
                type="number"
                name="weight"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Weight Stone"
                {...register('weight', {
                  required: MESS.ERROR_PRODUCT_WEIGHT,
                })}
              />
              {errors.weight && (
                <span className="text-red-500 text-sm">
                  {errors.weight.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="description" className="font-bold mb-1">
              Description
            </label>
            <div className="w-full flex flex-col">
              <input
                type="text"
                name="description"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Description"
                {...register('description', {
                  required: MESS.ERROR_PRODUCT_DESCRIPTION,
                })}
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="image_url" className="font-bold mb-1">
              Upload Image
            </label>
            <div className="w-full flex flex-col">
              <input
                type="url"
                name="image_url"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                {...register('image_url', {
                  required: MESS.ERROR_PRODUCT_IMAGE,
                  pattern: {
                    value: REGEX.URL_IMG,
                    message: 'URL không hợp lệ',
                  },
                })}
              />
              {errors.image_url && (
                <span className="text-red-500 text-sm">
                  {errors.image_url.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="type_id" className="font-bold mb-1">
              Type
            </label>
            <div className="w-full flex flex-col">
              <select
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                {...register('type_id', {
                  required: MESS.ERROR_PRODUCT_CATEGORY_ID,
                })}
                value={selectedCounter}
                onChange={(e) => setSelectedCounter(e.target.value)}
              >
                <option value="" disabled>
                  Select one
                </option>
                {typePriceList?.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.type}
                  </option>
                ))}
              </select>
              {errors.type_id && (
                <span className="text-red-500 text-sm">
                  {errors.type_id.message}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label htmlFor="counter_id" className="font-bold mb-1">
              Counter
            </label>
            <div className="w-full flex flex-col">
              <select
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                {...register('counter_id', {
                  required: MESS.ERROR_COUNTER,
                })}
                value={selectedCounter}
                onChange={(e) => setSelectedCounter(e.target.value)}
              >
                <option value="" disabled>
                  Select one
                </option>
                {counterList?.map((counter) => (
                  <option key={counter.id} value={counter.id}>
                    {counter.counterName}
                  </option>
                ))}
              </select>
              {errors.counter_id && (
                <span className="text-red-500 text-sm">
                  {errors.counter_id.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-1 justify-center p-4">
          <ConfigAntdButton type="danger">
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfigAntdButton>
          <ConfigAntdButton>
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Add
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
