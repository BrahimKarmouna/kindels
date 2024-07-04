import React, { FC } from "react";
import {
  FcApproval,
  FcAddDatabase,
  FcAssistant,
  FcShipped,
} from "react-icons/fc";
import VectorImg from "@/images/VectorHIW.svg";
import Badge from "@/shared/Badge/Badge";
import Image from "next/image";

export interface SectionHowItWorkProps {
  className?: string;
  data?: (typeof DEMO_DATA)[0][];
}

const DEMO_DATA = [
  {
    id: 2,
    img: <FcAddDatabase size={80} className="mb-2" />,
    imgDark: <FcAddDatabase size={80} className="mb-2" />,
    title: "Add to bag",
    desc: "Easily select the correct items and add them to the cart",
  },
  {
    id: 3,
    img: <FcAssistant size={80} className="mb-2" />,
    imgDark: <FcAssistant size={80} className="mb-2" />,
    title: "Order Confirmation",
    desc: "Send the request, and our support team will contact you to confirm your order",
  },
  {
    id: 4,
    img: <FcShipped size={80} className="mb-2" />,
    imgDark: <FcShipped size={80} className="mb-2" />,
    title: "Enjoy the product",
    desc: "Have fun and enjoy your 5-star quality products",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`}>
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 xl:gap-20">
        <Image
          className="absolute inset-x-0 hidden md:block top-5"
          src={VectorImg}
          alt="vector"
        />
        {data.map((item: (typeof DEMO_DATA)[number], index: number) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.img}
            <div className="mt-auto space-y-5 text-center">
              <Badge
                name={`Step ${index + 1}`}
                color={
                  !index
                    ? "red"
                    : index === 1
                    ? "indigo"
                    : index === 2
                    ? "yellow"
                    : "purple"
                }
              />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="block text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
