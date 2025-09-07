"use client";
import { useGetLanguageData } from "@/utils/language";
import ButtonLg from "../button-lg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CaptureUTMs } from "@/utils/utmUtils";

export const Header = ({ hideMenu }: { hideMenu?: boolean }) => {
  const textData = useGetLanguageData();
  const [selectedLink, setSelectedLink] = useState("#home");
  const [showMobileButton, setShowMobileButton] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { link: "#home", name: textData.home.menu.home },
    { link: "#history", name: textData.home.menu.history },
    { link: "#products", name: textData.home.menu.products },
    { link: "#testimonials", name: textData.home.menu.testimonials },
    { link: "#contact", name: textData.home.menu.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // rolando para baixo → esconde
        setIsVisible(false);
      } else {
        // rolando para cima ou parou → mostra
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleTouchMove = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white shadow ${
        isVisible || showMobileButton ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <CaptureUTMs />
      <div className="flex w-full justify-between items-center p-3 border-b border-gray-100">
        <Image
          className="w-8 h-8 md:w-7"
          src="/logo.png"
          alt="Logo"
          width={28}
          height={28}
        />

        {!hideMenu && (
          <div className="md:flex hidden gap-5">
            {links.map((link) => (
              <a
                href={link.link}
                className="font-semibold hover:text-green-700"
                style={{
                  color: link.link === selectedLink ? "green" : "black",
                }}
                key={link.link}
                onClick={() => setSelectedLink(link.link)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {showMobileButton && (
          <div className="absolute inset-0 z-40 bg-black/30 flex flex-col h-screen w-screen">
            <div className="flex h-screen w-[50%] bg-white flex-col gap-5 p-5">
              {links.map((link) => (
                <a
                  key={link.link}
                  href={link.link}
                  className={`font-semibold ${
                    link.link === selectedLink
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedLink(link.link)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <ButtonLg />
          {!hideMenu && (
            <>
              <button
                onClick={() => setShowMobileButton(!showMobileButton)}
                className="p-2 z-50 md:hidden rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {showMobileButton ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
