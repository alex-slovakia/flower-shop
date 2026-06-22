export const formatPrice = (value: number) =>
  new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR" }).format(value);

export const todayIso = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Bratislava" }).format(date);
};
