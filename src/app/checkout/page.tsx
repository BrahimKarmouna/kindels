"use client";

import emailjs from "@emailjs/browser";

import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import { useState } from "react";

import ContactInfo from "./ContactInfo";

import ShippingAddress from "./ShippingAddress";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import checkoutAction from "./checkoutAction";

const CheckoutPage = ({ searchParams }: { searchParams: { id?: number } }) => {
  const [countSelected, setCountSelected] = useState(1);
  const router = useRouter();
  // const ourAction = checkoutAction.bind(null, searchParams.id ?? null,countSelected)
  const renderProduct = (item: Product, index: number) => {
    const { image, price, name } = item;

    return (
      <div key={index} className="relative flex py-7 first:pt-0 last:pb-0">
        <div className="relative flex-shrink-0 w-24 overflow-hidden h-36 sm:w-28 rounded-xl bg-slate-100">
          <Image
            src={image}
            fill
            alt={name}
            className="object-contain object-center w-full h-full"
            sizes="150px"
          />
          <Link
            //@ts-ignore
            href={"/product-detail?id=" + (item.id - 1)}
            className="absolute inset-0"
          ></Link>
        </div>

        <div className="flex flex-col flex-1 ml-3 sm:ml-6">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  {/*@ts-ignore */}
                  <Link href={"/product-detail?id=" + (item.id - 1)}>
                    {name}
                  </Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
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
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={price}
                  />
                </div>
              </div>

              <div className="justify-end flex-1 hidden sm:flex">
                <Prices price={price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between pt-4 mt-auto text-sm">
            <div className="relative hidden text-center sm:block">
              <NcInputNumber
                onChange={(v) => setCountSelected(v)}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <form className="space-y-8" onSubmit={sendEmail}>
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo isActive />
          <input type="hidden" value={countSelected} name="count" />
          <input type="hidden" value={searchParams.id} name="packId" />
          <input
            type="hidden"
            value={PRODUCTS[(searchParams.id as number) - 1].description}
            name="packName"
          />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress isActive />
        </div>
      </form>
    );
  };
  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_ukha5rj", // Replace with your service ID
        "template_3rw6lcp", // Replace with your template ID
        e.target,
        "D6rvZ-4VTYBkI0nkJ" // Replace with your user ID
      );

      e.target.reset();
      router.push("/?success=1");
    } catch (error) {
    } finally {
    }
  };
  return (
    <div className="nc-CheckoutPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
            Caisse
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="flex-shrink-0 my-10 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Récapitulatif de commande</h3>
            <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
              {searchParams?.id &&
                [PRODUCTS[searchParams.id - 1]].map(renderProduct)}
            </div>

            <div className="pt-6 mt-10 text-sm border-t text-slate-500 dark:text-slate-400 border-slate-200/70 dark:border-slate-700 ">
              <div className="flex justify-between pt-4 text-base font-semibold text-slate-900 dark:text-slate-200">
                <span>La Total</span>
                <span>
                  {(
                    searchParams?.id &&
                    PRODUCTS[searchParams.id - 1].price * countSelected
                  )?.toFixed(2)}{" "}
                  DH
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-5 text-sm text-slate-500 dark:text-slate-400"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
