import Image from "next/image";
import Heading from "../Heading/Heading";
import candle from "@/images/candles/1.jpg";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
function SectionIntro() {
  return (
    <div className="container mx-auto bg-[#E3FFE6]">
      <div className="grid w-full grid-cols-6 py-8 px-2 h-[500px] ">
        <div className="flex flex-col justify-center col-span-3">
          <div className="">
            <Heading fontClass="text-4xl md:text-5xl font-bold my-0">
              Découvrez nos bougies parfumées
            </Heading>
            <Heading fontClass="text-xl md:text-2xl font-medium my-0">
              livrées rapidement chez vous.
            </Heading>
            <div className="">
              <ButtonPrimary
                className="flex justify-center nc-SectionHero2Item__button dark:bg-slate-900 "
                sizeClass="py-4 px-4 "
                href={"/AboutUs"}
              >
                <span>Achetez Maintenant</span>
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center col-span-3 overflow-hidden rounded-3xl">
          <Image
            src={candle}
            quality={100}
            fill
            objectFit="cover"
            alt=""
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
