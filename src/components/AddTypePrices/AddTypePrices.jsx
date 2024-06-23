import React from 'react';
import { useDispatch } from 'react-redux';
import useAddTypePrice from './useAddTypePrice';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { Button, DatePicker } from 'antd';
import { MESS } from '@/constant/validate';
import { Controller, useForm } from 'react-hook-form';
import { closePopup } from '@/store/reducers/popupReducer';
import dayjs from 'dayjs';

const AddTypePrices = () => {
  const dispatch = useDispatch();
  const addTypePrice = useAddTypePrice();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    addTypePrice.mutate({
      date: dayjs(data.date).valueOf(),
      buy_price_per_gram: parseFloat(data.buy_price_per_gram),
      sell_price_per_gram: parseFloat(data.sell_price_per_gram),
      type: data.type,
    });
  };

  const handleCancel = () => {
    dispatch(closePopup('Add a new Type Price'));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Date</h1>
          <div className="w-3/4">
            <Controller
              name="date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <>
                  <DatePicker
                    {...field}
                    className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    onChange={(date) => field.onChange(date)}
                  />
                  {errors.date && (
                    <p className="text-red-500">{errors.date.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Buy Price</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Buy Price..."
              {...register('buy_price_per_gram', {
                required: MESS.ERROR_TYPE_PRICE_BUY_PRICE,
                valueAsNumber: true, // Ensure input is handled as a number
              })}
            />
            {errors.buy_price_per_gram && (
              <span className="text-red-500 text-sm">
                {errors.buy_price_per_gram.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Sell Price</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Sell Price..."
              {...register('sell_price_per_gram', {
                required: MESS.ERROR_TYPE_PRICE_SELL_PRICE,
                valueAsNumber: true, // Ensure input is handled as a number
              })}
            />
            {errors.sell_price_per_gram && (
              <span className="text-red-500 text-sm">
                {errors.sell_price_per_gram.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Type</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Type..."
              {...register('type', { required: MESS.ERROR_TYPE_PRICE_TYPE })}
            />
            {errors.type && (
              <span className="text-red-500 text-sm">
                {errors.type.message}
              </span>
            )}
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

export default AddTypePrices;
