import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";

import SectionHero2 from "@/components/SectionHero/SectionHero2";

import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";

import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

function PageHome() {
  return (
    <div className="relative overflow-hidden nc-PageHome">
      <SectionIntro />

      <div className="container relative my-24 space-y-24 lg:space-y-32 lg:my-32">
        <div className="py-24 border-t border-b lg:py-32 border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>

        <SectionGridFeatureItems />

        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
