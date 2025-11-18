const currencies = ["IRT", "USD", "IRR"] as const
export type Currency = (typeof currencies)[number]
export const getCurrencyText = (currency: Currency) => {
  if (currency === "IRR") return "ریال؟؟؟؟؟"
  if (currency === "IRT") return "تومان؟؟؟؟"
  if (currency === "USD") return "$"
  return "?"
}
