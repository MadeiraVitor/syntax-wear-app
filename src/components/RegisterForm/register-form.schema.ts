import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Regex simples para CPF: 000.000.000-00 ou 00000000000
const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

export const registerUserFormSchema = z
  .object({
    email: z.email("E-mail inválido!"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres!")
      .nonempty("Campo obrigatório!"),
    confirmPassword: z.string().nonempty("Campo obrigatório!"),
    cpf: z
      .string()
      .nonempty("Campo obrigatório!")
      .regex(cpfRegex, "CPF inválido!"),
    birthDate: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida!",
      ),

    cellphone: z.string().nonempty("Campo obrigatório!"),

    firstName: z.string().nonempty("Campo obrigatório!"),
    lastName: z.string().nonempty("Campo obrigatório!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
        email: "",
        password: "",
    },
    criteriaMode: "all",
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
    isSubmitting,
    setError,
  }
}
