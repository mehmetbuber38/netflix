import React from "react";
import Image from "next/image";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        src={BackgroundImage}
        alt="background"
        priority
        fill
      />

      <Image
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        src={Logo}
        alt="Logo"
        width="120"
        priority //Öncelikle bunu yükle anlamına gelir.
      />
      {children}
    </div>
  );
};

export default AuthLayout;
