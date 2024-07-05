"use client";

import emailjs from "@emailjs/browser";

import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import { useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

import ContactInfo from "./ContactInfo";

import ShippingAddress from "./ShippingAddress";
import Image from "next/image";
import Link from "next/link";
// import checkoutAction from "./checkoutAction";

const CheckoutPage = ({ searchParams }: { searchParams: { id?: number } }) => {
  const [countSelected, setCountSelected] = useState(0);
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
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.35 1.94995L9.69 3.28992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.07 11.92L17.19 11.26"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 22H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{`Black`}</span>
                  </div>
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 9V3H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15V21H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L13.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 13.5L3 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{`2XL`}</span>
                  </div>
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
        "template_48q0skr", // Replace with your template ID
        e.target,
        "D6rvZ-4VTYBkI0nkJ" // Replace with your user ID
      );

      e.target.reset();
    } catch (error) {
    } finally {
    }
  };
  return (
    <div className="nc-CheckoutPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
            Checkout
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="flex-shrink-0 my-10 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
              {searchParams?.id &&
                [PRODUCTS[searchParams.id]].map(renderProduct)}
            </div>

            <div className="pt-6 mt-10 text-sm border-t text-slate-500 dark:text-slate-400 border-slate-200/70 dark:border-slate-700 ">
              <div className="flex justify-between pt-4 text-base font-semibold text-slate-900 dark:text-slate-200">
                <span>Order total</span>
                <span>
                  ${searchParams?.id && PRODUCTS[searchParams.id].price} DH
                </span>
              </div>
            </div>
            <ButtonPrimary className="w-full mt-8">Confirm order</ButtonPrimary>
            <div className="flex items-center justify-center mt-5 text-sm text-slate-500 dark:text-slate-400">
              <p className="relative block pl-5">
                <svg
                  className="w-4 h-4 absolute -left-1 top-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9945 16H12.0035"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Learn more{` `}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="font-medium underline text-slate-900 dark:text-slate-200"
                >
                  Taxes
                </a>
                <span>
                  {` `}and{` `}
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="font-medium underline text-slate-900 dark:text-slate-200"
                >
                  Shipping
                </a>
                {` `} infomation
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
