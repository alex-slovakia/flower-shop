export type Occasion = "Láska" | "Narodeniny" | "Poďakovanie" | "Len tak" | "Súcit";
export type ColorMood = "Jemná" | "Výrazná" | "Svieža" | "Monochromatická";

export interface ProductVariant {
  id: string;
  name: string;
  stemCount: number;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  composition: string;
  occasion: Occasion[];
  colorMood: ColorMood;
  image: string;
  gallery: string[];
  availableToday: boolean;
  featured?: boolean;
  variants: ProductVariant[];
}

export interface CartItem {
  key: string;
  productId: string;
  variantId: string;
  quantity: number;
  note?: string;
  deliveryDate?: string;
}

export interface DeliverySlot {
  id: string;
  label: string;
  price: number;
}

export interface CustomerDetails {
  email: string;
  phone: string;
  recipientName: string;
  street: string;
  district: string;
  postalCode: string;
  message: string;
}

export type PaymentMethod = "card" | "cash_on_delivery";

export interface DemoOrder {
  id: string;
  items: CartItem[];
  customer: CustomerDetails;
  paymentMethod: PaymentMethod;
  deliverySlot: DeliverySlot;
  total: number;
  createdAt: string;
}
