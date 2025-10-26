import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerScheme, RegisterScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";

export const useRegisterViewModel = () => {
  const registerMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterScheme>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Mateus",
      email: `mateus${Date.now()}@mail.com`,
      password: "12341234",
      confirmPassword: "12341234",
      phone: "37999332211",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    await registerMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    onSubmit,
  };
};
