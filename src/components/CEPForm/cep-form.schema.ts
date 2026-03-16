import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const cepRegex = /^\d{5}-?\d{3}$/;

export const cepFormSchema = z.object({
  cep: z
    .string()
    .trim()
    .nonempty("Campo obrigatório!")
    .regex(cepRegex, "CEP inválido!")
    .transform((value) => value.replace(/\D/g, "")),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CEPFormData>({
    resolver: zodResolver(cepFormSchema),
    mode: "onBlur",
    defaultValues: { cep: "" },
    criteriaMode: "all",
  });

  return { register, handleSubmit, errors, isSubmitting, reset };
};
