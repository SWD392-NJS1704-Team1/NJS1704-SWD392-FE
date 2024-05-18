import { PATHS } from "@/constant/path";
import { Length_Password, MESS } from "@/constant/validate";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(PATHS.LOGIN);
  };

  const password = watch("password", "");

  return (
    <div>
      <div className="bg-slate-950 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-40 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          RESET PASSWORD
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer"
              placeholder=""
              {...register("password", {
                required: MESS.ERROR_PASSWORD,
                minLength: {
                  value: Length_Password,
                  message: MESS.ERROR_PASSWORD_INVALID,
                },
              })}
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              New Password
            </label>
            <LockOutlined className="absolute top-4 right-4" />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="relative my-4">
            <input
              type="password"
              className="block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer"
              placeholder=""
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            <UnlockOutlined className="absolute top-4 right-4" />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-amber-400 hover:bg-amber-500 hover:text-white py-2 transition-colors duration-300"
          >
            RESET PASSWORD
          </button>
          <div className="flex justify-end items-center">
            <Link to={PATHS.LOGIN} className="text-amber-400">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
