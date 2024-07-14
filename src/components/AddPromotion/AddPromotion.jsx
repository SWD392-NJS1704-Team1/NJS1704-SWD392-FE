import { MESS } from '@/constant/validate';
import { closePopup } from '@/store/reducers/popupReducer';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import { useDispatch } from 'react-redux';
import useAddPromotion from './useAddPromotion';

const AddPromotion = () => {
  const dispatch = useDispatch();
  const addPromotion = useAddPromotion();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addPromotion.mutate({
      discountPercentage: data.discountPercentage,
      fixedDiscountAmount: data.fixedDiscountAmount,
      startDate: data.startDate,
      endDate: data.endDate,
    });
    reset();
  };

  const handleCancel = () => {
    dispatch(closePopup('Add Promotion'));
    reset();
  };

  const startDate = watch('startDate');

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">
            Discount Percentage
          </h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Discount Percentage..."
              {...register('discountPercentage', {
                required: MESS.ERROR_DISCOUNT_PERCENTAGE,
              })}
            />
            {errors.discountPercentage && (
              <span className="text-red-500 text-sm">
                {errors.discountPercentage.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">
            Fixed Discount Amount
          </h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Fixed Discount Amount..."
              {...register('fixedDiscountAmount', {
                required: MESS.ERROR_FIXED_DISCOUNT_AMOUNT,
              })}
            />
            {errors.fixedDiscountAmount && (
              <span className="text-red-500 text-sm">
                {errors.fixedDiscountAmount.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Start Date</h1>
          <div className="w-3/4">
            <input
              type="date"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Start Date..."
              {...register('startDate', { required: MESS.ERROR_START_DATE })}
            />
            {errors.startDate && (
              <span className="text-red-500 text-sm">
                {errors.startDate.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">End Date</h1>
          <div className="w-3/4">
            <input
              type="date"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="End Date..."
              {...register('endDate', {
                required: MESS.ERROR_END_DATE,
                validate: (value) =>
                  value > startDate || 'End date must be after start date',
              })}
            />
            {errors.endDate && (
              <span className="text-red-500 text-sm">
                {errors.endDate.message}
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

export default AddPromotion;
