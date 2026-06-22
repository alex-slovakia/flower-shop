"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/commerce";
import { CartDrawer } from "./cart-drawer";

interface CartContextValue {
  items: CartItem[];
  count: number;
  hydrated: boolean;
  addItem: (item: Omit<CartItem, "key">) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "luka-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Hydrate the client-only cart once after the server render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) setItems(JSON.parse(saved)); } catch { localStorage.removeItem(STORAGE_KEY); }
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, "key">) => {
    const key = `${item.productId}:${item.variantId}:${item.note ?? ""}:${item.deliveryDate ?? ""}`;
    setItems((current) => {
      const existing = current.find((entry) => entry.key === key);
      return existing ? current.map((entry) => entry.key === key ? { ...entry, quantity: entry.quantity + item.quantity } : entry) : [...current, { ...item, key }];
    });
    setIsOpen(true);
  }, []);
  const updateQuantity = useCallback((key: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.key !== key) : current.map((item) => item.key === key ? { ...item, quantity } : item)), []);
  const removeItem = useCallback((key: string) => setItems((current) => current.filter((item) => item.key !== key)), []);
  const value = useMemo(() => ({ items, count: items.reduce((sum, item) => sum + item.quantity, 0), hydrated, addItem, updateQuantity, removeItem, clearCart: () => setItems([]), openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }), [items, hydrated, addItem, updateQuantity, removeItem]);

  return <CartContext.Provider value={value}>{children}<AnimatePresence>{isOpen && <><motion.button className="drawer-backdrop" aria-label="Zavrieť košík" onClick={() => setIsOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} /><CartDrawer /></>}</AnimatePresence></CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart musí byť použitý v CartProvider");
  return value;
}
