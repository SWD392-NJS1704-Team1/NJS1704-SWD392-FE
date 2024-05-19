import { MESS, REGEX } from "@/constant/validate";
import { useAppDispatch } from "@/lib/redux-toolkit/Hook";
import { closePopup } from "@/lib/redux-toolkit/slices/PopupSlice";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import ConfigAntdButton from "../ConfigAntdButton";

const AddUser = () => {

    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleCancel = () => {
        dispatch(closePopup('Create a new User'))
    }

    return (
        <div className="p-2 border-2 border-gray-400">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex m-4">
                    <h1 className="w-1/5 flex font-bold items-center mr-4">User Name</h1>
                    <div className="w-4/5">
                        <input
                            type="text"
                            className="block w-full p-3 rounded-md text-md border-2 border-gray-400 focus:outline-none"
                            placeholder="User name..."
                            {...register("userName", { required: MESS.ERROR_NAME })}
                        />
                        {errors.userName && (
                            <span className="text-red-500 text-sm">
                                {errors.userName.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Email</h1>
                    <div className="w-4/5">
                        <input
                            type="email"
                            className="block w-full p-3 rounded-md text-md border-2 border-gray-400 focus:outline-none"
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
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Phone</h1>
                    <div className="w-4/5">
                        <input
                            type="text"
                            className="block w-full p-3 rounded-md text-md border-2 border-gray-400 focus:outline-none"
                            placeholder="Phone number..."
                            {...register("phone", {
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
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Role</h1>
                    <div className="w-4/5">
                        <select
                            className="block w-full p-3 rounded-md text-md border-2 border-gray-400 focus:outline-none"
                            {...register("role", {
                                required: MESS.ERROR_ROLE
                            })}
                        >
                            <option value="" disabled>Select one</option>
                            <option value="1">Manager</option>
                            <option value="2">Staff</option>
                        </select>
                        {errors.role && (
                            <span className="text-red-500 text-sm">
                                {errors.role.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Counter</h1>
                    <div className="w-4/5">
                        <select
                            className="block w-full p-3 rounded-md text-md border-2 border-gray-400 focus:outline-none"
                            {...register("counter", {
                                required: MESS.ERROR_COUNTER
                            })}
                        >
                            <option value="" disabled>Select one</option>
                            <option value="1">Counter 1</option>
                            <option value="2">Counter 2</option>
                        </select>
                        {errors.counter && (
                            <span className="text-red-500 text-sm">
                                {errors.counter.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Gender</h1>
                    <div className="w-4/5">
                        <div className="flex">
                            <div className="flex-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value={true}
                                        {...register("gender", { required: MESS.ERROR_GENDER })}
                                        className="gender"
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                            </div>
                            <div className="flex-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value={false}
                                        {...register("gender", { required: MESS.ERROR_GENDER })}
                                        className="gender"
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                            </div>
                        </div>
                        {errors.gender && (
                            <span className="text-red-500 text-sm">
                                {errors.gender.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-1/5 flex font-bold items-center mr-4">Status</h1>
                    <div className="w-4/5">
                        <div className="flex">
                            <div className="flex-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value={true}
                                        {...register("status", { required: MESS.ERROR_STATUS })}
                                        className="status"
                                    />
                                    <span className="ml-2">Active</span>
                                </label>
                            </div>
                            <div className="flex-1">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value={false}
                                        {...register("status", { required: MESS.ERROR_STATUS })}
                                        className="status"
                                    />
                                    <span className="ml-2">Inactive</span>
                                </label>
                            </div>
                        </div>
                        {errors.status && (
                            <span className="text-red-500 text-sm">
                                {errors.status.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-row gap-1 justify-center">
                    <ConfigAntdButton type='danger'>
                        <Button type="primary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </ConfigAntdButton>
                    <ConfigAntdButton type='ok'>
                        <Button type="primary" onClick={handleSubmit(onSubmit)}>
                            Add
                        </Button>
                    </ConfigAntdButton>
                </div>
            </form>
        </div>
    )
}

export default AddUser