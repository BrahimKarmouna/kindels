"use client";
import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product } from "@/data/data";
import { CartContext } from "@/utils/cart-provider";
import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

function OrderList() {
  const { dataFromStorage, setDataFromStorage } = useContext(CartContext);

  const renderProduct = (item: Product, index: number) => {
    const { image, price, name } = item;

    return (
      <div
        key={index}
        className="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0"
      >
        <div className="relative flex-shrink-0 w-24 overflow-hidden h-36 sm:w-32 rounded-xl bg-slate-100">
          <Image
            fill
            src={image}
            alt={name}
            sizes="300px"
            className="object-contain object-center w-full h-full"
          />
          <Link href="/product-detail" className="absolute inset-0"></Link>
        </div>

        <div className="flex flex-col flex-1 ml-3 sm:ml-6">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link href="/product-detail">{name}</Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1.5"></div>
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                  <div className="flex items-center space-x-1.5"></div>
                </div>

                <div className="relative flex justify-between w-full mt-3 sm:hidden">
                  <select
                    name="qty"
                    id="qty"
                    className="relative z-10 py-1 text-sm rounded-md form-select border-slate-200 dark:border-slate-700 dark:bg-slate-800 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  0
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={price}
                  />
                </div>
              </div>

              <div className="relative hidden text-center sm:block">
                <NcInputNumber
                  className="relative z-10"
                  onChange={(v) => {
                    setDataFromStorage &&
                      setDataFromStorage((prevCart) =>
                        prevCart
                          ? prevCart.map((i) => {
                              if (i.product.description === item.description) {
                                i.count = v;
                                return i;
                              } else {
                                return i;
                              }
                            })
                          : []
                      );
                    dataFromStorage &&
                      localStorage.setItem(
                        "cart",
                        JSON.stringify(
                          dataFromStorage.filter(
                            (i) => i.product.description !== item.description
                          )
                        )
                      );
                  }}
                />
              </div>

              <div className="justify-end flex-1 hidden sm:flex">
                <Prices price={price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between pt-4 mt-auto text-sm">
            <a
              href="##"
              className="relative z-10 flex items-center mt-3 text-sm font-medium text-primary-6000 hover:text-primary-500 "
            >
              <button
                onClick={() => {
                  setDataFromStorage &&
                    setDataFromStorage((prevCart) =>
                      prevCart
                        ? prevCart.filter(
                            (i) => i.product.description !== item.description
                          )
                        : []
                    );
                  dataFromStorage &&
                    localStorage.setItem(
                      "cart",
                      JSON.stringify(
                        dataFromStorage.filter(
                          (i) => i.product.description !== item.description
                        )
                      )
                    );
                }}
              >
                Remove
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  const renderStatusSoldout = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
        <NoSymbolIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">Sold Out</span>
      </div>
    );
  };

  const renderStatusInstock = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
        <CheckIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">In Stock</span>
      </div>
    );
  };
  return (
    <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 ">
      {dataFromStorage?.map((item) => item.product).map(renderProduct)}
    </div>
  );
}

export default OrderList;
