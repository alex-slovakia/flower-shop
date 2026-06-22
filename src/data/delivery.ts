import type { DeliverySlot } from "@/types/commerce";

export const deliverySlots: DeliverySlot[] = [
  { id: "rychle", label: "Do 3 hodín", price: 8.9 },
  { id: "poobede", label: "Dnes 14:00 – 17:00", price: 5.9 },
  { id: "vecer", label: "Dnes 17:00 – 20:00", price: 5.9 },
  { id: "zajtra", label: "Zajtra 09:00 – 13:00", price: 3.9 },
];

export const bratislavaDistricts = [
  "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Karlova Ves",
  "Dúbravka", "Rača", "Vajnory", "Podunajské Biskupice", "Vrakuňa",
];
