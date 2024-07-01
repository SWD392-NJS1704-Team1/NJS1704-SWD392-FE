import { MESS } from '@/constant/validate';
import { closePopup } from '@/store/reducers/popupReducer';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import useAddCustomer from '@/utils/useAddCustomer';
import ConfigAntdButton from '../Button/ConfigAntdButton';

const AddOrder = () => {
  const dispatch = useDispatch();
//   const AddCustomer = useAddCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // AddCustomer.mutate({
    //   fullName: data.fullName,
    //   email: data.email,
    //   phone: data.phone,
    //   address: data.address,
    //   accumulated_point: data.point,
    // });
  };

  const handleCancel = () => {
    dispatch(closePopup('Add a new Order'));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Customer Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Customer name..."
              {...register('fullName', { required: MESS.ERROR_NAME })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Staff Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Customer name..."
              {...register('staffName', { required: MESS.ERROR_ORDER_STAFF_NAME })}
            />
            {errors.staffName && (
              <span className="text-red-500 text-sm">
                {errors.staffName.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Date</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Date..."
              {...register('date', {
                required: MESS.ERROR_PHONE,
              })}
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Type</h1>
          <div className="w-3/4">
            <input
              type="type"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="type..."
              {...register('type', {
                required: MESS.ERROR_ORDER_TYPE,
              })}
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Status</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Status..."
              {...register('status', { required: MESS.ERROR_ADDRESS })}
            />
            {errors.status && (
              <span className="text-red-500 text-sm">
                {errors.status.message}
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

export default AddOrder;
