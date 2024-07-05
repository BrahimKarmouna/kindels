import Label from "@/components/Label/Label";
import React, { FC } from "react";

import Input from "@/shared/Input/Input";

interface Props {
  isActive: boolean;
}

const ContactInfo: FC<Props> = ({ isActive }) => {
  const renderAccount = () => {
    return (
      <div className="z-0 overflow-hidden border border-slate-200 dark:border-slate-700 rounded-xl">
        <div className="flex flex-col items-start p-6 sm:flex-row ">
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="sm:ml-8">
            <h3 className="flex text-slate-700 dark:text-slate-300">
              <span className="tracking-tight uppercase">INFOS DE CONTACT</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100 "
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
          <div className="flex flex-wrap items-baseline justify-between">
            <h3 className="text-lg font-semibold">Informations de contact</h3>
          </div>
          <div className="max-w-lg">
            <Label className="text-sm">Votre numéro de téléphone</Label>
            <Input
              required
              className="mt-1.5"
              name="phone"
              placeholder={"+212 xxx"}
              type={"tel"}
            />
          </div>
          <div className="max-w-lg">
            <Label className="text-sm">Adresse e-mail</Label>
            <Input required className="mt-1.5" type={"email"} name="email" />
          </div>
        </div>
      </div>
    );
  };

  return renderAccount();
};

export default ContactInfo;
