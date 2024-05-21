import { MESS, REGEX } from "@/constant/validate";
import { closePopup } from "@/store/reducers/popupReducer";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import ConfigAntdButton from "../Button/ConfigAntdButton";
// import useAddUser from "./useAddUser";
import store from "@/store/store";

const AddCustomer = () => {
  const dispatch = store.dispatch;
//   const addUser = useAddUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // addUser.mutate({
    //   fullname: data.fullname,
    //   email: data.email,
    //   phone_number: data.phone_number,
    //   address: data.address,
    //   date_of_birth: data.date_of_birth,
    //   role_id: data.role_id,
    //   counter_id: data.counter_id,
    // });
  };

  const handleCancel = () => {
    dispatch(closePopup("Create a new User"));
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex m-4">
          <h1 className="w-1/4 flex font-bold items-center mr-4">Name</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Customer name..."
              {...register("fullname", { required: MESS.ERROR_NAME })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                {errors.fullname.message}
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
              {...register("phone_number", {
                required: MESS.ERROR_PHONE,
                pattern: {
                  value: REGEX.PHONE,
                  message: MESS.ERROR_PHONE_INVALID,
                },
              })}
            />
            {errors.phone_number && (
              <span className="text-red-500 text-sm">
                {errors.phone_number.message}
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
              {...register("email", {
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
          <h1 className="w-1/4 flex font-bold items-center mr-4">Address</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Address..."
              {...register("address", { required: MESS.ERROR_ADDRESS })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

       

        <div className="flex m-4">
  <h1 className="w-1/4 flex font-bold items-center mr-4">Gender</h1>
  <div className="w-3/4">
    
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          value="male"
          {...register("gender", {
            required: MESS.ERROR_GENDER,
          })}
        />
        <span className="ml-2">Male</span>
      </label>
      <label className="inline-flex items-center ml-4">
        <input
          type="checkbox"
          value="female"
          {...register("gender", {
            required: MESS.ERROR_GENDER,
          })}
        />
        <span className="ml-2">Female</span>
      </label>
   
    {errors.gender && (
      <span className="text-red-500 text-sm">
        {errors.gender.message}
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

export default AddCustomer;
