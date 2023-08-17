import { useForm } from "react-hook-form";
import LoginUser from "../interfaces/LoginUser";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser } from "../services/UserService";
import { getToken } from "../services/TokenService";
import { useUserActions } from "../hooks/DispatcherWithActions";
import { useEffect } from "react";

interface Props {}

type LoginProps = Props;

const Login = (props: LoginProps) => {
  const { register, handleSubmit } = useForm<LoginUser>();
  const navigate = useNavigate();
  const { isSuccess, mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: loginUser,
  });
  const { setToken } = useUserActions();

  const submitData = (data: LoginUser) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const token = getToken();
      if (token) {
        setToken(token);
      }
      navigate("/");
    }
  }, [isSuccess, navigate, setToken]);

  return (
    <form className="flex flex-col w-3/6 mx-auto mt-10">
      <input {...register("login")} />
      <input {...register("password")} type="password" />
      <Button
        type="button"
        className="bg-orange-900 px-8 py-2 rounded-lg"
        onClick={handleSubmit(submitData)}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
