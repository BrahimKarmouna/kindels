"use client";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import { CartContext } from "@/utils/cart-provider";
import { useContext } from "react";

function OrderSummary() {
  const { dataFromStorage } = useContext(CartContext);
  return (
    <div className="flex-1">
      <div className="sticky top-28">
        <h3 className="text-lg font-semibold ">Order Summary</h3>
        <div className="text-sm divide-y mt-7 text-slate-500 dark:text-slate-400 divide-slate-200/70 dark:divide-slate-700/80">
          <div className="flex justify-between pb-4">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              {dataFromStorage?.reduce((prev, curr) => {
                return prev + curr.product.price * curr.count;
              }, 0)}{" "}
              DH
            </span>
          </div>
          <div className="flex justify-between py-4">
            <span>Shipping estimate</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              FREE
            </span>
          </div>

          <div className="flex justify-between pt-4 text-base font-semibold text-slate-900 dark:text-slate-200">
            <span>Order total</span>
            <span>
              {dataFromStorage?.reduce((prev, curr) => {
                return prev + curr.product.price * curr.count;
              }, 0)}{" "}
              DH
            </span>
          </div>
        </div>
        {(dataFromStorage?.reduce((prev, curr) => {
          return prev + curr.product.price * curr.count;
        }, 0) ?? 0) !== 0 ? (
          <ButtonPrimary href="/checkout" className="w-full mt-8">
            Checkout
          </ButtonPrimary>
        ) : (
          <ButtonPrimary disabled className="w-full mt-8 bg-neutral-600">
            Checkout
          </ButtonPrimary>
        )}
        <div className="flex items-center justify-center mt-5 text-sm text-slate-500 dark:text-slate-400"></div>
      </div>
    </div>
  );
}

export default OrderSummary;
