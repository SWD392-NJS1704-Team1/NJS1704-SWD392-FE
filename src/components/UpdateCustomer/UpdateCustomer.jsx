import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { MESS, REGEX } from '@/constant/validate';
import { useForm } from 'react-hook-form';
import { closePopup } from '@/store/reducers/popupReducer';
import useUpdateCustomer from './useUpdateCustomer';
import ConfigAntdButton from '../Button/ConfigAntdButton';

const UpdateCustomer = ({ id }) => {
  const dispatch = useDispatch();
  const updateCustomer = useUpdateCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateCustomer.mutate({
      id: id,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      accumulated_point: data.point,
    });
  };

  const handleCancel = () => {
    dispatch(closePopup('Update Customer'));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Full Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Full name..."
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
          <h1 className="w-1/4 flex font-bold items-center mr-4">Email</h1>
          <div className="w-3/4">
            <input
              type="email"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Email..."
              {...register('email', {
                required: MESS.ERROR_EMAIL,
                pattern: {
                  value: REGEX.EMAIL,
                  message: MESS.ERROR_EMAIL_INVALID,
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Phone</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Phone number..."
              {...register('phone', {
                required: MESS.ERROR_PHONE,
                pattern: {
                  value: REGEX.PHONE,
                  message: MESS.ERROR_PHONE_INVALID,
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Address</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Address..."
              {...register('address', { required: MESS.ERROR_ADDRESS })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Point</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Point..."
              {...register('point', { required: MESS.ERROR_POINT })}
            />
            {errors.point && (
              <span className="text-red-500 text-sm">
                {errors.point.message}
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
              Update
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomer;