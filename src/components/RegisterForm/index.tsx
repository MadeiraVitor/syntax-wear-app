import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form>
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Senha*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Confirmar senha*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="password"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-600 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Nome*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="text"
          placeholder="Nome"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-xs text-red-600 mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Sobrenome*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="text"
          placeholder="Sobrenome"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="text"
          placeholder="CPF"
          {...register("cpf")}
        />
        {errors.cpf && (
          <p className="text-xs text-red-600 mt-1">{errors.cpf.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Data de nascimento</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="date"
          placeholder="Data de nascimento"
          {...register("birthDate")}
        />
        {errors.birthDate && (
          <p className="text-xs text-red-600 mt-1">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Celular*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          type="tel"
          placeholder="Celular"
          {...register("cellphone")}
        />
        {errors.cellphone && (
          <p className="text-xs text-red-600 mt-1">
            {errors.cellphone.message}
          </p>
        )}
      </div>

        <button disabled={isSubmitting} className="bg-[#5433EB] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full cursor-pointer mt-4">
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </button>

    </form>
  );
};
