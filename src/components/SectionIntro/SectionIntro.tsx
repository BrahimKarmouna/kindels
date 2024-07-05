import Image from "next/image";
import Heading from "../Heading/Heading";
import candle from "@/images/test.png";

import ButtonPrimary from "@/shared/Button/ButtonPrimary";
function SectionIntro() {
  return (
    <div className="container mx-auto bg-[white]">
      <div className="grid w-full grid-cols-6 py-8 px-2 md:h-[700px] gap-2">
        <div className="flex flex-col justify-center col-span-6 md:col-span-3">
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
                href={"#acheterMaintenant"}
              >
                <span>Achetez Maintenant</span>
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center col-span-6 overflow-hidden md:col-span-3 rounded-3xl h-[280px] md:h-auto">
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
