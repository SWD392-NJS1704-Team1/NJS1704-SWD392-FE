import { Button } from "antd";
import ConfigAntdButton from "../Button/ConfigAntdButton";
import { useDispatch } from "react-redux";
import { MESS, REGEX } from "@/constant/validate";
import { useForm } from "react-hook-form";
import { useGetUserInfo } from "./useGetUserInfo";
import { closePopup } from "@/store/reducers/popupReducer";
import { useEffect, useState } from "react";
import useUpdateUser from "./useUpdateUser";
import useGetCounterList from "@/utils/useGetCounterList";


const UpdateUser = ({ id }) => {
    const dispatch = useDispatch();
    const { data } = useGetUserInfo(id);
    const updateUser = useUpdateUser();
    const { data: counterList, isLoading } = useGetCounterList();
    let temp = (data?.role.id) ? data?.role.id : 2
    const [selectedRole, setSelectedRole] = useState(temp)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCancel = () => {
    dispatch(closePopup('Update User'));
  };

    const onSubmit = (data) => {
        updateUser.mutate({
            id: id,
            fullname: data.fullname,
            email: data.email,
            phone_number: data.phone_number,
            date_of_birth: data.date_of_birth,
            role_id: data.role_id,
            counter_id: (selectedRole !== 2) ? data.counter_id : null,
        });
    };

    useEffect(() => {
        if (data) {
            setSelectedRole(temp)
            reset({
                fullname: data.fullname,
                email: data.email,
                phone_number: data.phone_number,
                date_of_birth: data.date_of_birth,
                role_id: data?.role.id,
                counter_id: null
            })
        }
    }, [data, reset, temp])

    console.log(selectedRole, temp);

  if (isLoading) {
    return <div>Loading</div>;
  }

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
              {...register('fullname', { required: MESS.ERROR_NAME })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                {errors.fullname.message}
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
              {...register('phone_number', {
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
          <h1 className="w-1/4 flex font-bold items-center mr-4">DOB</h1>
          <div className="w-3/4">
            <input
              type="text"
              className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
              placeholder="Date of birth(DD/MM/YYYY)..."
              {...register('date_of_birth', {
                required: MESS.ERROR_DOB,
                pattern: {
                  value: REGEX.DOB,
                  message: MESS.ERROR_DOB_INVALID,
                },
              })}
            />
            {errors.date_of_birth && (
              <span className="text-red-500 text-sm">
                {errors.date_of_birth.message}
              </span>
            )}
          </div>
        </div>

                <div className="flex m-4">
                    <h1 className="w-1/4 flex font-bold items-center mr-4">Role</h1>
                    <div className="w-3/4">
                        <select
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            {...register("role_id", {
                                required: MESS.ERROR_ROLE,
                            })}
                            onChange={(e) => {
                                const selectedRoleId = e.target.value;
                                temp = selectedRoleId
                                setSelectedRole(temp);
                            }}
                        >
                            <option value="" disabled>
                                Select one
                            </option>
                            <option value={2}>Manager</option>
                            <option value={3}>Staff</option>
                        </select>
                        {errors.role_id && (
                            <span className="text-red-500 text-sm">
                                {errors.role_id.message}
                            </span>
                        )}
                    </div>
                </div>

                {(selectedRole !== 2 && temp !== 2) ?
                    <div className="flex m-4">
                        <h1 className="w-1/4 flex font-bold items-center mr-4">Counter</h1>
                        <div className="w-3/4">
                            <select
                                className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                                {...register("counter_id", {
                                    required: MESS.ERROR_COUNTER,
                                })}
                                defaultValue=""
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
                    </div> : <div></div>
                }

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

export default UpdateUser;
