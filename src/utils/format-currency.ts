/**
 * Formata um número para o formato monetário brasileiro (BRL).
 * @param value Valor numérico a ser formatado
 * @param currency Código da moeda (padrão: 'BRL')
 * @param locale Localidade (padrão: 'pt-BR')
 * @returns Valor formatado como string
 */
export function formatCurrency(
  value: number,
  currency: string = "BRL",
  locale: string = "pt-BR",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
