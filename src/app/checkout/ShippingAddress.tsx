"use client";

import Label from "@/components/Label/Label";
import React, { FC } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Input from "@/shared/Input/Input";
import Radio from "@/shared/Radio/Radio";
import Select from "@/shared/Select/Select";

interface Props {
  isActive: boolean;
}

const ShippingAddress: FC<Props> = ({ isActive }) => {
  const renderShippingAddress = () => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl ">
        <div className="flex flex-col items-start p-6 sm:flex-row">
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div className="sm:ml-8">
            <h3 className="flex text-slate-700 dark:text-slate-300">
              <span className="uppercase">SHIPPING ADDRESS</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </h3>
            <div className="mt-1 text-sm font-semibold"></div>
          </div>
        </div>
        <div
          className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
            isActive ? "block" : "hidden"
          }`}
        >
          {/* ============ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <Label className="text-sm">Nome</Label>
              <Input className="mt-1.5" name="nom" required />
            </div>
            <div>
              <Label className="text-sm">Prénom</Label>
              <Input className="mt-1.5" name="prénom" required />
            </div>
          </div>

          {/* ============ */}
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-3">
            <div className="flex-1">
              <Label className="text-sm">Address</Label>
              <Input
                className="mt-1.5"
                placeholder=""
                name="address"
                required
                type={"text"}
              />
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
            <div>
              <Label className="text-sm">Ville</Label>
              <Input className="mt-1.5" required name="ville" />
            </div>
          </div>

          {/* ============ */}
          <div className="flex flex-col pt-6 sm:flex-row">
            <ButtonPrimary type="submit" className="sm:!px-7 shadow-none">
              Confirmer
            </ButtonPrimary>
          </div>
        </div>
      </div>
    );
  };
  return renderShippingAddress();
};

export default ShippingAddress;
