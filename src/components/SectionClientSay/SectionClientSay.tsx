"use client"
import Glide from "@glidejs/glide"; // Importation ajustée
import Heading from "@/components/Heading/Heading";
import React, { FC, useRef, useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // Importer Image de Next.js
import { DEMO_DATA } from "./data";

// Importer correctement vos images en fonction de leurs chemins
import clientSayMain from "@/images/girl.png";
import clientSay1 from "@/images/clientSay1.png";
import clientSay2 from "@/images/clientSay2.png";
import clientSay3 from "@/images/clientSay3.png";
import clientSay4 from "@/images/clientSay4.png";
import clientSay5 from "@/images/clientSay5.png";
import clientSay6 from "@/images/clientSay6.png";
import quotationImg from "@/images/quotation.png";
import quotationImg2 from "@/images/quotation2.png";

export interface SectionClientSayProps {
  className?: string;
}

const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  const sliderRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      perView: 1,
    };

    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);

    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  return (
    <div
      className={`nc-SectionClientSay relative flow-root ${className}`}
      data-nc-id="SectionClientSay"
    >
      <Heading desc="Voyons ce que les gens pensent de Ciseco" isCenter>
        Bonnes nouvelles de loin 🥇
      </Heading>
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        <div className="hidden md:block">
          {/* Cercles de couleur unie */}
          <div
            className="absolute top-9 -left-20 rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#333333",
            }}
          />
          <div
            className="absolute bottom-[100px] right-full mr-40 rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#444444",
            }}
          />
          <div
            className="absolute top-full left-[140px] rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#555555",
            }}
          />
          <div
            className="absolute -bottom-10 right-[140px] rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#666666",
            }}
          />
          <div
            className="absolute left-full ml-32 bottom-[80px] rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#777777",
            }}
          />
          <div
            className="absolute -right-10 top-10 rounded-full"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#888888",
            }}
          />
        </div>

        {/* Image principale clientSayMain */}
        <div className="mx-auto text-center">
          <Image
            src={clientSayMain}
            alt=""
            width={200}
            height={200} // Ajuster la hauteur selon les besoins
            className="block mx-auto"
          />
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className={`mt-12 lg:mt-16 relative ${isShow ? "" : "invisible"}`}
        >
          {/* Images de citation */}
          <Image
            className="opacity-50 md:opacity-100 absolute -mr-16 lg:mr-3 right-full top-1"
            src={quotationImg}
            alt=""
            width={50}
            height={50}
          />
          <Image
            className="opacity-50 md:opacity-100 absolute -ml-16 lg:ml-3 left-full top-1"
            src={quotationImg2}
            alt=""
            width={50}
            height={50}
          />

          {/* Slider Glide */}
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {DEMO_DATA.map((item) => (
                <li
                  key={item.id}
                  className="glide__slide flex flex-col items-center text-center"
                >
                  <span className="block text-2xl">{item.content}</span>
                  <span className="block mt-8 text-2xl font-semibold">
                    {item.clientName}
                  </span>
                  <div className="flex items-center space-x-0.5 mt-3.5 text-yellow-500">
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                    <StarIcon className="w-6 h-6" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Balles Glide */}
          <div className="mt-10 glide__bullets flex items-center justify-center" data-glide-el="controls[nav]">
            {DEMO_DATA.map((item, index) => (
              <button
                key={item.id}
                className="glide__bullet w-2 h-2 rounded-full bg-neutral-300 mx-1 focus:outline-none"
                data-glide-dir={`=${index}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionClientSay;
