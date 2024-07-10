import React, { FC } from "react";

import ProductCard from "@/components/ProductCard";
import { Product, PRODUCTS } from "@/data/data";

//
export interface SectionGridFeatureItemsProps {
  data?: Product[] | null;
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  data = PRODUCTS,
}) => {
  return (
    <div className="relative nc-SectionGridFeatureItems" id="acheterMaintenant">
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 `}
      >
        {data?.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFeatureItems;
