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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addPromotion.mutate({
      counter_name: data.counter_name,
      location: data.location,
    });
    reset();
  };

  const handleCancel = () => {
    dispatch(closePopup('Add Promotion'));
    reset();
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">
            Promotion Code
          </h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Promotion Code..."
              {...register('discount_percentage', {
                required: MESS.ERROR_COUNTER_NAME,
              })}
            />
            {errors.discount_percentage && (
              <span className="text-red-500 text-sm">
                {errors.discount_percentage.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Discount</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Discount..."
              {...register('fixed_discount_amount', {
                required: MESS.ERROR_LOCATION,
              })}
            />
            {errors.fixed_discount_amount && (
              <span className="text-red-500 text-sm">
                {errors.fixed_discount_amount.message}
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
              {...register('start_date', { required: MESS.ERROR_LOCATION })}
            />
            {errors.start_date && (
              <span className="text-red-500 text-sm">
                {errors.start_date.message}
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
              {...register('end_date', {
                required: MESS.ERROR_LOCATION,
              })}
            />
            {errors.end_date && (
              <span className="text-red-500 text-sm">
                {errors.end_date.message}
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
