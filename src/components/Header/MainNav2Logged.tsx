import React, { FC } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "@/shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const renderContent = () => {
    return (
      <div className="flex justify-between h-20">
        <div className="flex items-center flex-1 lg:hidden">
          <MenuBar />
        </div>

        <div className="flex items-center lg:flex-1">
          <Logo className="flex-shrink-0" />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          <Navigation />
        </div>

        <div className="flex items-center justify-end flex-1 text-slate-700 dark:text-slate-100">
          {/* <CartDropdown /> */}
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10 bg-white border-b nc-MainNav2Logged dark:bg-neutral-900 border-slate-100 dark:border-slate-700">
      <div className="container">{renderContent()}</div>
    </div>
  );
};

export default MainNav2Logged;
