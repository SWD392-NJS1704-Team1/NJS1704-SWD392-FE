import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { closePopup } from '@/store/reducers/popupReducer';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { Button, notification } from 'antd';
import { MESS, REGEX } from '@/constant/validate';
import useUpdateProduct from './useUpdateProduct';
import useGetTypePricesList from '@/pages/TypePricespage/useGetTypePricesList';
import useGetCounterList from '@/pages/CounterManagement/useGetCounterList';
import ComponentLoading from '../ComponentLoading/ComponentLoading';
import { useGetProductInfo } from './useGetProductInfo';

const UpdateProduct = ({ id }) => {
  const dispatch = useDispatch();
  const updateProduct = useUpdateProduct();
  const { data: productInfo } = useGetProductInfo(id);
  const { data: typeList, isLoading: typeLoading } = useGetTypePricesList();
  const { data: counterList, isLoading: counterLoading } = useGetCounterList();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (productInfo) {
      reset({
        product_name: productInfo.product_name,
        barcode: productInfo.barcode,
        quantity: productInfo.quantity,
        price_processing: productInfo.price_processing,
        price_stone: productInfo.price_stone,
        weight: productInfo.weight,
        description: productInfo.description,
        image_url: productInfo.image_url,
        type_id: productInfo.type.id,
        counter_id: productInfo.counter_id.id,
      });
    }
  }, [productInfo, reset]);

  const handleCancel = () => {
    dispatch(closePopup('Update Product'));
  };

  const onSubmit = async (data) => {
    updateProduct.mutate({
      id: id,
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

  if (typeLoading || counterLoading) {
    return (
      <div className="h-20">
        <ComponentLoading />
      </div>
    );
  }

  return (
    <div className="py-2 px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <h3 className="font-bold mb-1">Product Name</h3>
            <div className="w-full flex flex-col">
              <input
                type="text"
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
            <h3 className="font-bold mb-1">Barcode</h3>
            <div className="w-full flex flex-col">
              <input
                type="text"
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
            <h3 className="font-bold mb-1">Quantity</h3>
            <div className="w-full flex flex-col">
              <input
                type="number"
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
            <h3 className="font-bold mb-1">Price Processing</h3>
            <div className="w-full flex flex-col">
              <input
                type="number"
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
            <h3 className="font-bold mb-1">Price Stone</h3>
            <div className="w-full flex flex-col">
              <input
                type="number"
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
            <h3 className="font-bold mb-1">Weight</h3>
            <div className="w-full flex flex-col">
              <input
                type="number"
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                placeholder="Weight"
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
            <h3 className="font-bold mb-1">Description</h3>
            <div className="w-full flex flex-col">
              <input
                type="text"
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
            <h3 className="font-bold mb-1">Upload Image</h3>
            <div className="w-full flex flex-col">
              <input
                type="url"
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
            <h3 className="font-bold mb-1">Type</h3>
            <div className="w-full flex flex-col">
              <select
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                {...register('type_id', {
                  required: MESS.ERROR_PRODUCT_CATEGORY_ID,
                })}
              >
                <option value="" disabled>
                  --Select Type--
                </option>
                {typeList?.map((type) => (
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
            <h3 className="font-bold mb-1">Counter</h3>
            <div className="w-full flex flex-col">
              <select
                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                {...register('counter_id', {
                  required: MESS.ERROR_COUNTER,
                })}
              >
                <option value="" disabled>
                  --Select Counter--
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
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
