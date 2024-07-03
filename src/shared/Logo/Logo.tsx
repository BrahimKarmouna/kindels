import React from "react";
import logoImg from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`inline-block text-slate-600 ${className}`}
    >
      {img ? (
        <div className="w-32 h-auto"> {/* Increased width */}
          <Image
            className="dark:hidden"
            src={img}
            quality={100}
            alt="Logo"
            layout="intrinsic"
            height={128} // Increased height
            width={128} // Increased width
            priority
          />
        </div>
      ) : (
        "Logo Here"
      )}
    </Link>
  );
};

export default Logo;
