import { useState } from "react";
import { useCEPForm } from "./cep-form.schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../utils/format-currency";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 19.9,
  Sudeste: 14.9,
  Sul: 9.9,
};

export const CEPForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddressError(null);
    setAddress(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setAddressError(
          "CEP não encontrado. Por favor, verifique e tente novamente.",
        );
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      if (!shippingCost) {
        setAddressError(
          "Região de entrega não identificada. Não é possível calcular o frete.",
        );
        return;
      }

      setAddress({ ...data, shippingCost: shippingCost });
    } catch {
      setAddressError(
        "Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Digite seu CEP"
          maxLength={9}
          {...register("cep")}
          className="border border-[#c0c0c0] rounded-md p-3"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Calculando..." : "Calcular"}
        </button>
      </div>
      {errors.cep?.message && (
        <span className="text-red-600 text-sm">{errors.cep.message}</span>
      )}

      {addressError && (
        <span className="text-red-600 text-sm">{addressError}</span>
      )}

      {address && (
        <div>
          <p>
            <strong>Região:</strong> {address.regiao}
          </p>
          <p>
            <strong>Custo de entrega:</strong>{" "}
            {formatCurrency(address.shippingCost)}
          </p>
        </div>
      )}
    </form>
  );
};
