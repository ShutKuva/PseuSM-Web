import { Controller, useForm } from "react-hook-form";
import RegisterUser from "../interfaces/RegisterUser";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { registerUser } from "../services/UserService";
import { useUserActions } from "../hooks/DispatcherWithActions";
import { getToken } from "../services/TokenService";
import { useEffect } from "react";

interface Props {}

type RegisterProps = Props;

const Register = (props: RegisterProps) => {
  const { handleSubmit, register, control } = useForm<RegisterUser>();
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationFn: registerUser,
  });
  const { setToken } = useUserActions();

  const submitHandler = (data: RegisterUser) => {
    console.log(data);
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
  }, [isSuccess, setToken, navigate]);

  return (
    <form className="flex flex-col w-3/6 mx-auto mt-10">
      <input type="text" {...register("name")} />
      <input type="text" {...register("login")} />
      <input type="password" {...register("password")} />
      <Controller
        name="avatar"
        control={control}
        render={({ field: { onChange, onBlur, name, value } }) => (
          <input
            onChange={(e) => {
              onChange(e.target.files ? e.target.files[0] : undefined);
            }}
            onBlur={onBlur}
            name={name}
            type="file"
          />
        )}
      />
      <Button
        type="button"
        className="bg-orange-900 px-8 py-2 rounded-lg"
        onClick={handleSubmit(submitHandler)}
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
