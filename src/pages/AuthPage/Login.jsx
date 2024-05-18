import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { PATHS } from "@/constant/path";
import { MESS, REGEX } from "@/constant/validate";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(PATHS.RESET_PASSWORD);
  };

  return (
    <div>
      <div className="bg-slate-950 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-40 relative">
        <h2 className="text-4xl text-white font-bold text-center mb-6 ">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"Email"}
            cssClass={
              "block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer"
            }
            cssLabel={
              "absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            }
            {...register("email", {
              required: MESS.ERROR_EMAIL,
              pattern: {
                value: REGEX.EMAIL,
                message: MESS.ERROR_EMAIL_INVALID,
              },
            })}
            icon={<UserOutlined className="absolute top-4 right-4" />}
            error={errors?.email?.message}
          />
          <Input
            label={"Password"}
            type={"password"}
            cssClass={
              "block w-96 py-2.5 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-amber-400 focus:outline-none focus:ring-0 focus:text-white focus:border-amber-400 peer"
            }
            cssLabel={
              "absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-400 peer-focus:dark:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            }
            {...register("password", { required: MESS.ERROR_PASSWORD })}
            icon={<UnlockOutlined className="absolute top-4 right-4" />}
            error={errors?.password?.message}
          />
          <div className="flex justify-end items-center">
            <Button link={PATHS.FORGOT_PASSWORD} classCss={"text-amber-400"}>
              Forgot Password?
            </Button>
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-amber-400 hover:bg-amber-500 hover:text-white py-2 transition-colors duration-300"
          >
            LOGIN
          </button>
          <div className="flex">
            <span className="m-2">
              Don't have an account?{" "}
              <Button link={PATHS.REGISTER} classCss={"text-amber-400"}>
                Create an Account
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
