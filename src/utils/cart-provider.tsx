"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import CartItem from "./CartItem";

export const CartContext = createContext<{
  dataFromStorage: CartItem[];
  setDataFromStorage: Dispatch<SetStateAction<CartItem[]>> | undefined;
}>({ dataFromStorage: [], setDataFromStorage: undefined });

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataFromStorage, setDataFromStorage] = useState<CartItem[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const retrievedData: string | null = localStorage.getItem("cart");
      setDataFromStorage(retrievedData ? JSON.parse(retrievedData) : []);
    }
  }, []);
  return (
    <CartContext.Provider value={{ dataFromStorage, setDataFromStorage }}>
      {children}
    </CartContext.Provider>
  );
}
