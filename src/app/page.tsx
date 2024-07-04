import React from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";

import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";

import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

function PageHome() {
  return (
    <div className="relative overflow-hidden nc-PageHome">
      <SectionIntro />

      <div className="container relative mt-6 mb-24 space-y-24 lg:space-y-32 lg:mb-32 lg:mt-8">
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
