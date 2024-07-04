"use client";

import React, { useContext, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import LikeButton from "@/components/LikeButton";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "@/components/BagIcon";
import NcInputNumber from "@/components/NcInputNumber";
import { PRODUCTS } from "@/data/data";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "@/components/IconDiscount";
import Prices from "@/components/Prices";
import toast from "react-hot-toast";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import detail1JPG from "@/images/products/detail1.jpg";
import detail2JPG from "@/images/products/detail2.jpg";
import { CartContext } from "@/utils/cart-provider";
import detail3JPG from "@/images/products/detail3.jpg";
import Policy from "./Policy";
import NotifyAddTocart from "@/components/NotifyAddTocart";
import Image from "next/image";
import AccordionInfo from "@/components/AccordionInfo";
import CartItem from "@/utils/CartItem";

const LIST_IMAGES_DEMO = [detail1JPG, detail2JPG, detail3JPG];

const ProductDetailPage = ({
  searchParams,
}: {
  searchParams: { id?: number };
}) => {
  const { status, image } = PRODUCTS[searchParams.id ?? 0];
  const { dataFromStorage, setDataFromStorage } = useContext(CartContext);

  const [qualitySelected, setQualitySelected] = useState(1);

  const notifyAddTocart = (
    setDataFromCart:
      | React.Dispatch<React.SetStateAction<CartItem[]>>
      | undefined,
    dataFromStorage: CartItem[] | undefined
  ) => {
    setDataFromCart &&
      setDataFromCart((prevCart) =>
        prevCart
          ? [
              ...prevCart,
              {
                count: qualitySelected,
                product: PRODUCTS[searchParams.id ?? 0],
              },
            ]
          : []
      );
    dataFromStorage &&
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...dataFromStorage,
          {
            count: qualitySelected,
            product: PRODUCTS[searchParams.id ?? 0],
          },
        ])
      );
    toast.custom(
      (t) => (
        <NotifyAddTocart
          product={PRODUCTS[searchParams.id ?? 0]}
          index={searchParams.id ?? 0}
          productImage={image}
          qualitySelected={qualitySelected}
          show={t.visible}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }
    const CLASSES =
      "absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300";
    if (status === "New in") {
      return (
        <div className={CLASSES}>
          <SparklesIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "50% Discount") {
      return (
        <div className={CLASSES}>
          <IconDiscount className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "Sold Out") {
      return (
        <div className={CLASSES}>
          <NoSymbolIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "limited edition") {
      return (
        <div className={CLASSES}>
          <ClockIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    return null;
  };

  const renderSectionContent = () => {
    return (
      <div className="space-y-7 2xl:space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {PRODUCTS[searchParams.id ?? 0].description}
          </h2>

          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">$112.00</div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={PRODUCTS[searchParams.id ?? 0].price}
            />

            <div className="border-l h-7 border-slate-300 dark:border-slate-700"></div>

            <div className="flex items-center">
              <a
                href="#reviews"
                className="flex items-center text-sm font-medium"
              >
                <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
                <div className="ml-1.5 flex">
                  <span>{PRODUCTS[searchParams.id ?? 0].rating}</span>
                  <span className="block mx-2">·</span>
                  <span className="underline text-slate-600 dark:text-slate-400">
                    {PRODUCTS[searchParams.id ?? 0].numberOfReviews} reviews
                  </span>
                </div>
              </a>
              <span className="hidden sm:block mx-2.5">·</span>
              <div className="items-center hidden text-sm sm:flex">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span className="ml-1 leading-none">{status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}

        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        <div className="flex space-x-3.5">
          <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
            <NcInputNumber
              defaultValue={qualitySelected}
              onChange={setQualitySelected}
            />
          </div>
          <ButtonPrimary
            className="flex-1 flex-shrink-0"
            onClick={() => notifyAddTocart(setDataFromStorage, dataFromStorage)}
          >
            <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
            <span className="ml-3">Add to cart</span>
          </ButtonPrimary>
        </div>

        {/*  */}
        <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
        {/*  */}

        {/* ---------- 5 ----------  */}
        <AccordionInfo content={PRODUCTS[searchParams.id ?? 0].content} />

        {/* ---------- 6 ----------  */}
        <div className="hidden xl:block">
          <Policy />
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-ProductDetailPage `}>
      {/* MAIn */}
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[55%] ">
            {/* HEADING */}
            <div className="relative">
              <div className="relative aspect-w-16 aspect-h-16">
                <Image
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  src={image}
                  quality={100}
                  className="object-cover w-full rounded-2xl"
                  alt="product detail 1"
                />
              </div>
              {renderStatus()}
              {/* META FAVORITES */}
              <LikeButton className="absolute right-3 top-3 " />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-8 xl:mt-8">
              {[LIST_IMAGES_DEMO[1], LIST_IMAGES_DEMO[2]].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16"
                  >
                    <Image
                      sizes="(max-width: 640px) 100vw, 33vw"
                      fill
                      src={item}
                      className="object-cover w-full rounded-2xl"
                      alt="product detail 1"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
            {renderSectionContent()}
          </div>
        </div>

        {/* DETAIL AND REVIEW */}
        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-16">
          <div className="block xl:hidden">
            <Policy />
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* OTHER SECTION */}
          <SectionSliderProductCard
            heading="Customers also purchased"
            subHeading=""
            headingFontClassName="text-2xl font-semibold"
            headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
          />
        </div>
      </main>

      {/* MODAL VIEW ALL REVIEW */}
    </div>
  );
};

export default ProductDetailPage;
