export function toPercentageFromNumber(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    signDisplay: "exceptZero",
    maximumFractionDigits: 2,
  }).format(amount);
}
