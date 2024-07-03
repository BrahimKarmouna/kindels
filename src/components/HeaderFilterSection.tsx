"use client";

import React, { FC, useState } from "react";
import Heading from "@/shared/Heading/Heading";

import TabFilters from "@/components/TabFilters";
import { Transition } from "@/app/headlessui";

export interface HeaderFilterSectionProps {
  className?: string;
}

const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({
  className = "mb-12",
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex flex-col relative ${className}`}>
      <Heading>{`Achetez Maintenant`}</Heading>
      <div className="flex flex-col justify-between space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2 "></div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full my-2 border-b border-neutral-200 dark:border-neutral-700"></div>
      </Transition>
    </div>
  );
};

export default HeaderFilterSection;
