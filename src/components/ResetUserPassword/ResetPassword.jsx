import { Button } from "antd"
import ConfigAntdButton from "../Button/ConfigAntdButton"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closePopup } from "@/store/reducers/popupReducer";
import { Length_Password, MESS } from "@/constant/validate";
import useResetPassword from "./useResetPassword";

const ResetPassword = ({ id }) => {
    const dispatch = useDispatch();

    const resetPassword = useResetPassword()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleCancel = () => {
        dispatch(closePopup('Reset Password'));
    };

    const onSubmit = (data) => {
        resetPassword.mutate({
            id: id,
            oldPassword: data.oldPassword,
            password: data.password,
            retypePassword: data.retypePassword,
        });
    };

    const password = watch("password", "");

    return (
        <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex m-4">
                    <h1 className="w-2/5 flex font-bold items-center mr-4">Old Password</h1>
                    <div className="w-3/5">
                        <input
                            type="password"
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            placeholder="Old password..."
                            {...register('oldPassword', { required: MESS.ERROR_OLD_PASSWORD })}
                        />
                        {errors.oldPassword && (
                            <span className="text-red-500 text-sm">
                                {errors.oldPassword.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-2/5 flex font-bold items-center mr-4">New Password</h1>
                    <div className="w-3/5">
                        <input
                            type="password"
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            placeholder="Password..."
                            {...register('password', {
                                required: MESS.ERROR_NEW_PASSWORD,
                                minLength: {
                                    value: Length_Password,
                                    message: MESS.ERROR_PASSWORD_INVALID,
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex m-4">
                    <h1 className="w-2/5 flex font-bold items-center mr-4">Confirm Password</h1>
                    <div className="w-3/5">
                        <input
                            type="password"
                            className="block w-full p-2 rounded-md text-md border-2 border-gray-300 focus:outline-none"
                            placeholder="Confirm password..."
                            {...register('retypePassword', {
                                required: MESS.ERROR_CONFIRM_PASSWORD,
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                        />
                        {errors.retypePassword && (
                            <span className="text-red-500 text-sm">
                                {errors.retypePassword.message}
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
                            Reset
                        </Button>
                    </ConfigAntdButton>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword