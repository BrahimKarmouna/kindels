"use client";
import candle1 from "@/images/candles/11.jpg";
import candle2 from "@/images/candles/12.jpg";
import candle3 from "@/images/candles/13.jpg";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React, { FC, useRef, useState, useEffect } from "react";

export interface SectionClientSayProps {
  className?: string;
}

const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  return (
    <div className="grid grid-cols-12 md:min-h-[410px] gap-6 my-24">
      <div className="flex items-center justify-start col-span-12 md:col-span-4 text-start">
        <Heading desc="Parfums infusés d'huiles spéciales pour une essence unique.">
          Packs Parfumé
        </Heading>
      </div>
      <div className="grid grid-cols-3 md:col-span-8 col-span-12 gap-3 min-h-[200px] md:min-h-[500px]">
        <div className="relative col-span-1 my-5 overflow-hidden rounded-3xl ">
          <Image
            src={candle3}
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 overflow-hidden rounded-3xl">
          <Image
            src={candle2}
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative col-span-1 my-5 overflow-hidden rounded-3xl ">
          <Image
            src={candle1}
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
