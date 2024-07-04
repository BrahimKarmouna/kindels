"use client";

import React, { FC, useState } from "react";
import backgroundLineSvg from "@/images/Moon.svg";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Next from "@/shared/NextPrev/Next";
import Prev from "@/shared/NextPrev/Prev";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";
import Image from "next/image";
import { HERO2_DEMO_DATA as DATA } from "./data";

export interface SectionHero2Props {
  className?: string;
}

let TIME_OUT: NodeJS.Timeout | null = null;

const SectionHero2: FC<SectionHero2Props> = ({ className = "" }) => {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <div
        className={`nc-SectionHero2Item nc-SectionHero2Item--animation flex flex-col-reverse lg:flex-col relative overflow-hidden ${className}`}
        key={index}
      >
        <div className="absolute z-20 flex justify-center -translate-x-1/2 bottom-4 start-1/2 rtl:translate-x-1/2">
          {DATA.map((_, index) => {
            const isActive = indexActive === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setIndexActive(index);
                  handleAfterClick();
                }}
                className={`relative px-1 py-1.5 cursor-pointer`}
              >
                <div
                  className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                >
                  {isActive && (
                    <div
                      className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${
                        isActive ? " " : " "
                      }`}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* BG */}
        <div className="absolute inset-0 ">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute object-contain w-full h-full"
            src={backgroundLineSvg}
            alt="hero"
          />
        </div>

        <div className="container relative pb-0 pt-14 sm:pt-20 lg:py-44">
          <div
            className={`relative z-[1] w-full max-w-3xl space-y-8 sm:space-y-14 nc-SectionHero2Item__left`}
          >
            <div className="space-y-5 sm:space-y-6">
              <span className="block text-base font-medium nc-SectionHero2Item__subheading md:text-xl text-slate-700">
                {item.subHeading}
              </span>
              <h2 className="nc-SectionHero2Item__heading font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
                {item.heading}
              </h2>
            </div>
          </div>
          <div className="top-0 bottom-0 w-full max-w-2xl mt-10 lg:mt-0 lg:absolute end-0 rtl:-end-28 xl:max-w-3xl 2xl:max-w-4xl">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-right-bottom w-full h-full nc-SectionHero2Item__image"
              src={item.image}
              alt={item.heading}
              priority
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero2;
